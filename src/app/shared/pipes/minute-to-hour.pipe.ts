import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteToHour'
})
export class MinuteToHourPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }
    const hours = Math.floor(value / 60) !== 0 ? Math.floor(value / 60) + 'h ' : '';
    return hours + (value % 60) + 'min';
  }
}
