import { Component, Input, Output} from '@angular/core';
import { ControllerService } from './../controller/controller.service';

@Component({
  selector: '.activity-row',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: []
})
export class CityComponent {
  @Input()
  public city;

  constructor(private controllerService:ControllerService ) {
  }

  public setActiveCity() {
    this.controllerService.sendActiveCity.emit(this.city);
  }

}
