import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpResponse } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ForecastWeatherComponent } from './forecast-weather/forecast-weather.component';
import { WeatherOfDayComponent } from './weather-of-day/weather-of-day.component';
import { HeaderComponent } from './header/header.component';
import {WeatherService} from './weather.service';
import { weatherRouting } from './weather.routing';

@NgModule({
  declarations: [
    AppComponent,
    ForecastWeatherComponent,
    WeatherOfDayComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    weatherRouting
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
