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
    this.selectHandler(this.listOfCities[0]);
  }

  public setActiveCity(city) {
    this.selectHandler(city);
  }

  private selectHandler(city: IItems){
    this.listOfCities.forEach((item:IItems) => {
      if(item.selected) {
        item.selected = false;
      }
    });
    city.selected = true;
    this.selectedCity = city;
  }

}
