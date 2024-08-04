import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdvertisersService } from 'src/app/services/advertisers.service';
import { Router } from '@angular/router';
import { advertiser } from 'src/app/classes/advertisers';

declare var bootstrap: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myFrm: FormGroup = new FormGroup({
    "code": new FormControl(null, [Validators.required]),
    "Email": new FormControl(null, [Validators.required, Validators.email]),
    "LastName": new FormControl(null, [Validators.required]),
    "password": new FormControl(null, [Validators.required, Validators.minLength(8)]),
    "phone": new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}")]),
    "phone2": new FormControl(null, [Validators.pattern("[0-9]{10}")])
  });
  myA: advertiser;

  constructor(public advertiserService: AdvertisersService, public router: Router) { }

  getCode() {
    return this.myFrm.controls['code'];
  }
  getEmail() {
    return this.myFrm.controls['Email'];
  }
  getLastName() {
    return this.myFrm.controls['LastName'];
  }
  getPassword() {
    return this.myFrm.controls['password'];
  }
  getPhone() {
    return this.myFrm.controls['phone'];
  }
  getPhone2() {
    return this.myFrm.controls['phone2'];
  }

  ngOnInit() { }

  send() {
    if (this.myFrm.valid) {
      this.myA = this.myFrm.value;
      this.advertiserService.a = this.myA;
      const my = this.advertiserService.add(this.myA);
      // this.showSuccessModal();
      this.router.navigate(['myHomePage']);
    }
  }

  showSuccessModal() {
    const modalElement = document.getElementById('successModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}


