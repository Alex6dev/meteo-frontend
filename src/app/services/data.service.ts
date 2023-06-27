import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../interface/city';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiAdresseDto } from '../interface/api-adresse-dto';
import { ApiCityCodePostalDto, ApiDataMeteoDto } from '../interface/api-data-meteo-dto';
import { ApiDataMeteo, UnitsDataMeteo } from '../interface/api-data-meteo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //data meteo of city
  private dataMeteo= new BehaviorSubject<ApiDataMeteo|undefined>(undefined);
  dataMeteo$=this.dataMeteo.asObservable();

  //units data 
  private unitsDataMeteo=new BehaviorSubject<UnitsDataMeteo|undefined>(undefined);
  unitsDataMeteo$=this.unitsDataMeteo.asObservable();

  

  constructor(
    private http : HttpClient
  ) {}

  setUnitsDataMeteo(unitsDataMeteo:UnitsDataMeteo|undefined){
    this.unitsDataMeteo.next(unitsDataMeteo);
    console.log(this.dataMeteo);
  }
  setDataMeteo(dataMeteo:ApiDataMeteo|undefined){
    this.dataMeteo.next(dataMeteo);
  }

  getDataMeteo(coordonate:number[]):Observable<boolean>{ 
    return new Observable<boolean>(subscriber=>{
      this.http.get<ApiDataMeteoDto>(`https://api.open-meteo.com/v1/forecast?latitude=${coordonate[1]}&longitude=${coordonate[0]}5&hourly=temperature_2m,rain,uv_index`).subscribe({
        next:(value)=>{
          this.setUnitsDataMeteo({
            temperature_2m: value.hourly_units.temperature_2m,
            rain:           value.hourly_units.rain,
            uv_index:       value.hourly_units.uv_index
          });
          this.setDataMeteo({
            time:           value.hourly.time,
            temperature_2m: value.hourly.temperature_2m,
            rain:           value.hourly.rain,
            uv_index:       value.hourly.uv_index
          });
          subscriber.next(true);
              
        }, 
        error:(err)=>{
          console.log("error: "+err);
          subscriber.next(false);
        }
      })
    })   
  }

  getGeographicalCoordinatesWithCityName(city:string):Observable<City[]>{
    return new Observable<City[]>(subscriber=>{
      this.http.get<ApiAdresseDto>(`https://api-adresse.data.gouv.fr/search/?q=${city}&type=municipality`).subscribe({
        next:(value)=>{
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
        }
      })
    })
  }
  getGeographicalCoordinatesWithCityCodepost(city:string):Observable<City[]>{
    return new Observable<City[]>(subscriber=>{
      this.http.get<ApiCityCodePostalDto[]>(`https://geo.api.gouv.fr/communes?codePostal=${city}`).subscribe({
        next:(value)=>{
          console.log(value);
          if(value.length>0){
            let tabCity:City[]=[];
            value.forEach((feature)=>{
              tabCity.push({
                nameCity:feature.nom,
                postcode: feature.codesPostaux[0]
              })
            })
            subscriber.next(tabCity);
            
          }else{
            //error
          }
          
        },
        error:(err)=>{
          console.log("error: "+err);
        }
      })
    })
  }
}
