import { Component, Input} from '@angular/core';

@Component({
  selector: '.temperatur',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  @Input()
  public selectedCity;

  constructor() {
  }


}
