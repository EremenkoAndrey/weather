import { Component } from '@angular/core';
import 'rxjs/add/operator/first';
import { ServerService, ICities } from './server.service';
import { ControllerService } from './controller/controller.service';


@Component({
  selector: '.element',
  templateUrl: './app.component.html',
  providers: [ServerService]
})
export class AppComponent {
  public listOfCities:ICities[] = [];
  public selectedCity:ICities;

  constructor(private serverService:ServerService,
              private controllerService:ControllerService) {

    serverService.citiesList.subscribe((city:ICities) => {
      this.listOfCities.push(city);
    });
    serverService.citiesList.first().subscribe((city:ICities) => {
      this.selectHandler(city);
    });

    this.controllerService.sendActiveCity.subscribe((city:ICities) => {
      this.selectHandler(city);
    })
  }

  private selectHandler(city:ICities){
    this.listOfCities.forEach((item:ICities) => {
      if(item.selected) {
        item.selected = false;
      }
    });
    city.selected = true;
    this.selectedCity = city;
  }

}
