import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meteo';


  ngOnInit(){
    // this.dataService.getDataVille();
    // this.dataService.getDataMeteo();
    // window.sessionStorage.setItem("language",document.documentElement.lang)    
      
  }
}
