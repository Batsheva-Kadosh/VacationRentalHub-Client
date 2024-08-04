import { Component, OnInit } from '@angular/core';
import { AdvertisersService } from 'src/app/services/advertisers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(public advertisersService: AdvertisersService, private router: Router) { }


  ngOnInit() {

  }
  check(email: string, password: string) {

    this.advertisersService.login(email, password).subscribe(x => {
      this.advertisersService.a = x;

      if (!this.advertisersService.a) {

        this.router.navigate(['myRegisterPage']);
      } else {
        this.router.navigate(['myHomePage']);
      }
    });
  }

}
