import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: '.activity-row',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  @Input()
  public city;

  @Output()
  private sendActiveCity = new EventEmitter();

  constructor() {
  }

  public setActiveCity() {
    this.sendActiveCity.emit(this.city);
  }

}
