import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, city: string): string {
    if (!city) return value;
    const re = new RegExp(city, 'gi');
    return value.replace(re, city.toUpperCase());
  }

}
