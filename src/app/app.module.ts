import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { WeatherComponent } from './weather/weather.component';
import { AsideComponent } from './aside/aside.component';
import { ContinentPipe } from './continent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityComponent,
    WeatherComponent,
    AsideComponent,
    ContinentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
