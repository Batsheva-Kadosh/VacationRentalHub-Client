import { Component, OnInit } from '@angular/core';
import { AdvertisersService } from 'src/app/services/advertisers.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public myAdverServ:AdvertisersService) { }

  ngOnInit() {
    this.myAdverServ.a=null
  }

}
