import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';

export const getWeatherIcon = (icon: string): string => {
  return icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : "";
};
@Component({
  selector: 'app-weather-of-day',
  templateUrl: './weather-of-day.component.html',
  styleUrls: ['./weather-of-day.component.css']
})
export class WeatherOfDayComponent implements OnInit {

  public weatherSearchForm!: FormGroup 
  weatherData: any;
  location: any = [];

  cityName ?: String;
  temp?:String;
  weatherKind?:String;
  tempMin?:String;
  tempMax?:String ;
  icon?:String ;
  
 
  constructor(private formBuilder: FormBuilder,  private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({location:[""]});
}


  sendToWeatherService(formValues: any) {
    this.weatherService.gettWeather(formValues.location).subscribe((data:any) => this.weatherData = data);
    console.log(this.weatherData);
     

  }

 
  getIcon() : string
  {
    return getWeatherIcon(this.weatherData?.weather[0]?.icon);

  }

}