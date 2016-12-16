import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '.element-left',
  templateUrl: './cities.component.html'
})

export class CitiesComponent {
  @Input()
  public listOfCities;

  @Input()
  public selectedCity;

  @Output()
  private sendActiveCity = new EventEmitter();

  constructor() {}

  public setActiveCity(e) {
    this.sendActiveCity.emit(e);
  }

}
