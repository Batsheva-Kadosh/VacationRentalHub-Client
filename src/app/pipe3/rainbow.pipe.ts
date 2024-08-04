import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rainbow'
})
export class RainbowPipe implements PipeTransform {

  transform(value: string, isCity: boolean): string {
    if (!isCity || !value) return value;

    let coloredString = '';
    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
    for (let i = 0; i < value.length; i++) {
      coloredString += `<span style="color:${colors[i % colors.length]}">${value[i]}</span>`;
    }
    return coloredString;
  }
}
