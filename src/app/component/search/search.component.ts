import { Component, EventEmitter, Output, booleanAttribute } from '@angular/core';
import { City } from 'src/app/interface/city';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  elementSearch="";
  innerError="";
  tabItemSearch:City[]=[];
  @Output() sendCity= new EventEmitter<City>();

  constructor(
    private dataService:DataService
  ){}

  submitForm():void{
    if(this.elementSearch!=""){
      this.innerError="";

      //is codepostal
      if(this.elementSearch.match("^[0-9]{5}$")){
        this.dataService.getGeographicalCoordinatesWithCityCodepost(this.elementSearch).subscribe({
          next:(tabCity)=>{
            this.tabItemSearch=tabCity;
          }
        });

      //is ville
      }else if(this.elementSearch.trim().match("^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$")){

        this.dataService.getGeographicalCoordinatesWithCityName(this.elementSearch).subscribe({
          next:(tabCity)=>{
            this.tabItemSearch=tabCity;
          }
        });
      //error it is not ville and code postal
      }else{
        this.innerError="Ce champs doit comporter un code postal fr (11111) ou le nom d'une ville valide !";
      }
    }else{
      this.innerError="Ce champs doit est obligatoire !";
    }
  }
  sendCityChoose(city:City|null){
    if(city!=null){
      
      //if i have coordinate with city name
      if(city.coordinate){
        console.log("coordinate present");
        
        this.dataService.getDataMeteo(city.coordinate!).subscribe(boolean=>{
          if(boolean){
            this.sendCity.emit(city);
          }else{
            this.innerError="Une erreur est survenu."
          }
        })
      //else i not have coordinate with city codepostal
      }else{

        this.dataService.getGeographicalCoordinatesWithCityName(city.nameCity).subscribe(tabCity=>{
          this.dataService.getDataMeteo(tabCity[0].coordinate!).subscribe(boolean=>{
            if(boolean){
              this.sendCity.emit(city);
            }else{
              this.innerError="Une erreur est survenu."
            }
          })
        })
      }

    }
    this.tabItemSearch=[];
  }
}
