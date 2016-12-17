import { Pipe, PipeTransform } from '@angular/core';
import { IItems } from "./mock";

@Pipe({
  name: 'continent'
})
export class ContinentPipe implements PipeTransform {

  transform(arr:IItems[], name:string): any {
    if(!name) return arr;

    return arr.filter((city:IItems)=> {
      return city.continent === name;
    });

  }

}
