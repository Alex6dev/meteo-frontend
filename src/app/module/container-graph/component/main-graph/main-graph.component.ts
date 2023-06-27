import { Component, Input } from '@angular/core';
import { City } from 'src/app/interface/city';
import { ApiDataMeteo, UnitsDataMeteo } from 'src/app/interface/api-data-meteo';
import { DataService } from '../../../../services/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main-graph [city]',
  templateUrl: './main-graph.component.html',
  styleUrls: ['./main-graph.component.css']
})
export class MainGraphComponent {
  @Input() city!:City;
  meteoData!:ApiDataMeteo;
  unitsDataMeteo!:UnitsDataMeteo;
  sub=new Subscription();
  
  constructor(
    private dataService:DataService
    ){}
    
    ngOnInit() {
    this.sub=this.dataService.dataMeteo$.subscribe({
      next:(data)=>{
        this.meteoData=data!;
      }
    });
    this.sub=this.dataService.unitsDataMeteo$.subscribe({
      next:(unitsData)=>{
        this.unitsDataMeteo=unitsData!;
      }
    })
  }
}
