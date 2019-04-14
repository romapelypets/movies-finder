import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteToHour'
})
export class MinuteToHourPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }
    return Math.floor(value / 60) + 'h ' + (value % 60) + 'min';
  }
}
