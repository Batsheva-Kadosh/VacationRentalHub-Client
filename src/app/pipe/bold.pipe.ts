import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'bold'
})
export class BoldPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, city: string): SafeHtml {
    if (!city) return value;
    const re = new RegExp(city, 'gi');
    const newValue = value.replace(re, `<span style="background-color: pink; font-weight: bold;">${city}</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(newValue);
  }
}
