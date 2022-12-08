import { getLocaleDateTimeFormat } from '@angular/common';
import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from './services/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tiempoCiudad: any
  hora: string = ""

  constructor(private weatherapiservice: WeatherAPIService) {

    setInterval(() => {
      this.hora = new Date().toString().split(' ')[4];
    }, 1);

  }

  ngOnInit() {
    
  }

  getTienpo(ciudad: string) {
    this.weatherapiservice.getWeather(ciudad)
    .subscribe(
      resp => {
        console.log(this.tiempoCiudad)
        this.tiempoCiudad = resp


      },
      error => console.log(error)
    )
  }

  submitLocation(ciudad: any) {
    this.getTienpo(ciudad.value)

    ciudad.value = ''
    ciudad.focus();

    return false;
  }

}
