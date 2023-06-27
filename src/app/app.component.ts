import { Component } from '@angular/core';
import { City } from './interface/city';


// const fakeCity:City={
//   nameCity:"Lille",
//   postcode:59000,
//   coordinate:[2.515,50.5456]
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meteo';
  // city:City|null=fakeCity;
  city:City|null=null;


  getCity(city:City|null){
    this.city=city;
  }
}
