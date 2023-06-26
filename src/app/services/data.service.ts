import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../interface/city';
import { Observable } from 'rxjs';
import { ApiAdresseDto } from '../interface/api-adresse-dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http : HttpClient
  ) { }

  getDataMeteo(){
    this.http.get("https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&hourly=temperature_2m,rain,uv_index").subscribe({
      next:(value)=>{
        console.log(value);
        
      }, 
      error:(err)=>{
        console.log("error: "+err);
        
      }
    })
  }

  getGeographicalCoordinatesWithCity(city:string):Observable<City[]>{
    //https://api-adresse.data.gouv.fr/search/?postcode=59000
    return new Observable<City[]>(subscriber=>{
      this.http.get<ApiAdresseDto>(`https://api-adresse.data.gouv.fr/search/?q=${city}&type=municipality`).subscribe({
        next:(value)=>{
          console.log(value);
          if(value.features.length>0){
            let tabCity:City[]=[];
            value.features.forEach((feature)=>{
              tabCity.push({
                nameCity:feature.properties.city,
                postcode: feature.properties.postcode,
                coordinate:[
                  feature.geometry.coordinates[0],
                  feature.geometry.coordinates[1]
                ]
              })
            })
            subscriber.next(tabCity);
            
          }else{
            //error
          }
          
        },
        error:(err)=>{
          console.log("error: "+err);
          return -1;
        }
      })

    })

  }
}
