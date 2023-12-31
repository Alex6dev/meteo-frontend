import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './component/search/search.component';
import { ModalChooseCityComponent } from './component/modal-choose-city/modal-choose-city.component';
import { ContainerGraphModule } from './module/container-graph/container-graph.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ModalChooseCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ContainerGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
