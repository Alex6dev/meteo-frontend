import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGraphComponent } from './component/main-graph/main-graph.component';
import { TempeGraphComponent } from './component/tempe-graph/tempe-graph.component';
import { RainGraphComponent } from './component/rain-graph/rain-graph.component';



@NgModule({
  declarations: [
    MainGraphComponent,
    TempeGraphComponent,
    RainGraphComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainGraphComponent
  ]
})
export class ContainerGraphModule { }
