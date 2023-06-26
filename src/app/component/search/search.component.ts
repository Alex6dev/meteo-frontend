import { Component } from '@angular/core';
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
  constructor(
    private dataService:DataService
  ){}

  submitForm():void{
    if(this.elementSearch!=""){
      this.innerError="";

      //is codepostal
      if(this.elementSearch.match("^[0-9]{5}$")){
        //todo: this.dataService

      //is ville
      }else if(this.elementSearch.trim().match("^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$")){
        
        this.dataService.getGeographicalCoordinatesWithCity(this.elementSearch).subscribe({
          next:(tabCity)=>{
            this.tabItemSearch=tabCity;
            console.log(tabCity);
            
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
}
