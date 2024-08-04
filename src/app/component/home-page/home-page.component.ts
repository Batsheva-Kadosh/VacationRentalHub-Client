import { Component, OnInit } from '@angular/core';
import { apartment } from 'src/app/classes/apartment';
import { ApartmentService } from 'src/app/services/apartment.service';
import { Options, ChangeContext } from 'ng5-slider';
import { AdvertisersService } from 'src/app/services/advertisers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  minValue: number = 1000;
  maxValue: number = 5000;
  options: Options = {
    floor: 1000,
    ceil: 5000,
    step: 100
  }
  isCity: boolean = false;
  selectedCity: string = '';
  selectedCode: string = '';

  constructor(public apartmentService: ApartmentService, public advertisersService: AdvertisersService) { }

  ngOnInit() {
    this.apartmentService.getAllApartments().subscribe(a => this.apartmentService.arrAppartments = a);
    this.apartmentService.getAllApartments().subscribe(a => this.apartmentService.apartmentByCity = a);
    this.apartmentService.getAllApartments().subscribe(a => this.apartmentService.apartmentByCode = a);
    this.advertisersService.getAllAdvertiser().subscribe(a => this.advertisersService.allAdvertiser = a);
  }

  ByPrice() {
    
    this.apartmentService.getApartmentByPrice(this.minValue, this.maxValue).subscribe(a => this.apartmentService.arrAppartments = a);
  }

  ByCity(): void {
    
    if (this.selectedCity) {
      
      this.isCity = true;
      this.apartmentService.getApartmentByCity(this.selectedCity).subscribe(
        a => this.apartmentService.arrAppartments = a,
      );
    } else {
      this.apartmentService.getAllApartments().subscribe(
        a => this.apartmentService.arrAppartments = a,
      );
    }

  }
  ByCode(): void {
    if (this.selectedCode) {
      // this.advertisersService.().subscribe(a => this.advertisersService.allAdvertiser = a);

      this.apartmentService.getApartmentByIdAdvertiser(this.selectedCode).subscribe(
        a => this.apartmentService.arrAppartments = a,
      );
    } else {
      this.advertisersService.getAllAdvertiser().subscribe(a => this.advertisersService.allAdvertiser = a);

    }
  }
}
