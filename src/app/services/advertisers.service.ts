import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { advertiser } from '../classes/advertisers';

@Injectable({
  providedIn: 'root'
})
export class AdvertisersService {
  url: string = 'http://localhost:8080/advertiser/';
  allAdvertiser: Array<advertiser>;
  a: advertiser = new advertiser();
  isIn: boolean = false;

  constructor(public myHttp: HttpClient) { }

  getAllAdvertiser(): Observable<Array<advertiser>> {
    return this.myHttp.get<Array<advertiser>>(`${this.url}getAll`);
  }

  login(email: string, password: string): Observable<advertiser> {
    return this.myHttp.get<advertiser>(`${this.url}login/${email}/${password}`);
  }

  add(adv: advertiser): boolean {
    //return this.myHttp.get<advertiser>(`${this.url}add`);
    return true;
  }
}
