import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apartment } from '../classes/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  arrAppartments: Array<apartment>;
  appartment:apartment = new apartment();
  apartmentByPrice:Array<apartment>;
  apartmentByCity:Array<apartment>;
  apartmentByCode:Array<apartment>;
  
  url: string = 'http://localhost:8080/apartment/';

  constructor(public myHttp: HttpClient) { }
  getAllApartments(): Observable<Array<apartment>> {
    return this.myHttp.get<Array<apartment>>(`${this.url}getAll`);
  }

  getApartmentByPrice(price1: number, price2: number): Observable<Array<apartment>> {
    return this.myHttp.get<Array<apartment>>(`${this.url}getApartmentByPrice/${price1}/${price2}`);
  }
  getApartmentByCity(city: string): Observable<Array<apartment>> {
    return this.myHttp.get<Array<apartment>>(`${this.url}getApartmentByCity/${city}`);
  }
  getApartmentByIdAdvertiser(lastName:string): Observable<Array<apartment>> {
    return this.myHttp.get<Array<apartment>>(`${this.url}getApartmentByIdAdvertiser/${lastName}`);
  }
  
}
