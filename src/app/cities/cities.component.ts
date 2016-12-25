import {Component, Input } from '@angular/core';

@Component({
  selector: '.element-left',
  templateUrl: './cities.component.html'
})

export class CitiesComponent {
  @Input()
  public listOfCities;

  @Input()
  public selectedCity;


  public filtredTo:string;

  constructor() {}

  public filterToContinent(event) {
    let el = event.target as HTMLLinkElement;
    this.filtredTo = el.innerText;
  }

}
