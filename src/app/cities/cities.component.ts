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

  public filtredTo:string;

  constructor() {}

  public setActiveCity(e) {
    this.sendActiveCity.emit(e);
  }

  public filterToContinent(event) {
    let el = event.target as HTMLLinkElement;
    this.filtredTo = el.innerText;
  }

}
