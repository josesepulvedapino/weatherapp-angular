import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  api: string = 'a97d17c2f07dce5cdd59d5b2d12c948f';
  url: string = '';

  constructor(private httpclient: HttpClient ) {
    this.url = `https://api.openweathermap.org/data/2.5/weather?appid=${this.api}&units=metric&q=`

   }

   getWeather(ciudad: string) {
    return this.httpclient.get(`${this.url}${ciudad}`)
   }
}
