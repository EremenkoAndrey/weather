import { Component } from '@angular/core';
import { IItems, mockItems } from './mock';


@Component({
  selector: '.element',
  templateUrl: './app.component.html'
})

export class AppComponent {
  public listOfCities:IItems[];
  public selectedCity:IItems;

  constructor() {
    this.listOfCities = mockItems;
    this.selectedCity = this.listOfCities[0];
  }

  public setActiveCity(e) {
    this.selectedCity = e;
  }

}
