import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(text: string, length: number = 20): any {
    return text.substr(0, length);
  }

}
