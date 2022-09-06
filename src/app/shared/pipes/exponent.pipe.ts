import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'exponent'
})

export class ExponentPipe implements PipeTransform{
  transform(value: number, exponent = 2): number {
    return Math.pow(value, exponent)
  }
}
