import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from 'src/app/interface/city';

@Component({
  selector: 'app-modal-choose-city [tabCity]',
  templateUrl: './modal-choose-city.component.html',
  styleUrls: ['./modal-choose-city.component.css']
})
export class ModalChooseCityComponent {
  @Input() tabCity!:City[];
  @Output() sendCityChoose=new EventEmitter<City|null>();
  
  chooseCity(city:City){
    this.sendCityChoose.emit(city);
  }
  closeModal(){
    this.sendCityChoose.emit(null);
  }
}
