import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import {CurrentWeather } from './current-weather';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Forecast } from './forecast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  current: CurrentWeather = new CurrentWeather ('NewYork','80',' ','sunny','96','72');
  
  location : any;
 
  constructor(private http : HttpClient) { }

  getWeather(){
    return this.current;
  }

  gettWeather(location: string): Observable<any> {
    return this.http
               .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=277ffe9de538605598909ac444e5588e&units=metric`
     );
     
}
localWeather(lat: any, lon: any): Observable<any>{

  return this.http
             .get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=277ffe9de538605598909ac444e5588e&units=metric`);


}

  fiveDayForecast(city:String){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=277ffe9de538605598909ac444e5588e&units=metric`);
  }
 
}
