import { Pipe, PipeTransform } from '@angular/core';
import { ICiies } from './server.service';

@Pipe({
  name: 'continent'
})
export class ContinentPipe implements PipeTransform {

  transform(arr:ICiies[], name:string): any {
    if(!name) return arr;

    return arr.filter((city:ICiies)=> {
      return city.continent === name;
    });

  }

}
