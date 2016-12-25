import { Injectable } from '@angular/core';
import { EventEmitter} from '@angular/core';


@Injectable()
export class ControllerService {
  public sendActiveCity:EventEmitter<any>;

  constructor() {
    this.sendActiveCity = new EventEmitter();
  }


}
