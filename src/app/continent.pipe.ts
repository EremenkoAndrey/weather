import { Pipe, PipeTransform } from '@angular/core';
import { ICities } from './server.service';

@Pipe({
  name: 'continent'
})
export class ContinentPipe implements PipeTransform {

  transform(arr:ICities[], name:string): any {
    if(!name) return arr;

    return arr.filter((city:ICities)=> {
      return city.continent === name;
    });

  }

}
