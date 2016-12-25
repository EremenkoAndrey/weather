import { Component } from '@angular/core';
import { ServerService, ICiies } from './server.service';
import 'rxjs/add/operator/first';

@Component({
  selector: '.element',
  templateUrl: './app.component.html',
  providers: [ServerService]
})

export class AppComponent {
  public listOfCities:ICiies[] = [];
  public selectedCity:ICiies;

  constructor(private serverService:ServerService) {
    serverService.citiesList.subscribe((city:ICiies) => {
      this.listOfCities.push(city);
    });
    serverService.citiesList.first().subscribe((city:ICiies) => {
      this.selectHandler(city);
    })
  }

  public setActiveCity(city) {
    this.selectHandler(city);
  }

  private selectHandler(city: ICiies){
    this.listOfCities.forEach((item:ICiies) => {
      if(item.selected) {
        item.selected = false;
      }
    });
    city.selected = true;
    this.selectedCity = city;
  }

}
