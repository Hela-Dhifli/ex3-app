import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Forecast } from '../forecast';
import { WeatherService } from '../weather.service';

export const getWeatherIcon = (icon: string): string => {
  return icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : "";
};

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css']
})


export class ForecastWeatherComponent implements OnInit {

  forecastForm : any;
  cityForecast : Forecast[] = [];
  constructor(private ws:WeatherService) { }
  ngOnInit(): void {
    this.forecastForm = new FormGroup ({
      foreCastCity : new FormControl("")
    })
    this.ws.getWeather();
  }

  onSubmit(){
    this.cityForecast.splice(0, this.cityForecast.length);
    this.ws.fiveDayForecast(this.forecastForm.value.foreCastCity).subscribe(
      (data:any) => {
        for(let i=0; i<data.list.length ; i+=8){
          const temporary = new Forecast(data.list[i].dt_txt, 
            data.list[i].weather[0].icon,
            data.list[i].main.temp_max,
            data.list[i].main.temp_max,
            )
            this.cityForecast.push(temporary);
        }
      }
    );
  }

  getIcon(icon: any): string 
   {
    return getWeatherIcon(icon);
   }
}
