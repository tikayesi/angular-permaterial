import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): unknown {
    // let timeDiff = Math.abs(Date.now() - value.getTime())
    // let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    // return age;
    return moment().diff(value, 'years');

  }

}
