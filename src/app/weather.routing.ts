import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {WeatherOfDayComponent} from './weather-of-day/weather-of-day.component';
import { ForecastWeatherComponent} from './forecast-weather/forecast-weather.component';


const WEATHER_ROUTER:Routes = [
    {path: '',component : WeatherOfDayComponent},
    {path : 'forecast', component : ForecastWeatherComponent }
]

export const weatherRouting:any = RouterModule.forRoot(WEATHER_ROUTER);
