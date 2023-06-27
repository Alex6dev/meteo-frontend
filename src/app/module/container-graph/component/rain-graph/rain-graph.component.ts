import { Component, Input } from '@angular/core';
import { City } from 'src/app/interface/city';
import { GraphRain } from '../../interface/graph-rain';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-rain-graph [unit] [dataRain] [city]',
  templateUrl: './rain-graph.component.html',
  styleUrls: ['./rain-graph.component.css']
})
export class RainGraphComponent {
  @Input() unit!:string;
  @Input() dataRain!:GraphRain;
  @Input() city!:City;

  ngOnInit(){
    const options: any = {
      chart: {
        borderColor: '#1212ff',
        borderWidth: 2,
        type: 'column'
      },
      title: {
        text: "Diagramme des précipitations ("+this.unit+") pour 4 jour"
      },
      credits: {
        enabled: false
      },
      yAxis:{
        title:{
          enabled:false
        }

      },
      xAxis: {
        categories: this.dataRain.time.slice(0,96),
        tickInterval:24,
        title: {
          enabled: true,
          text:"Jour et heure"
        },
      },
      series: [{
        name: this.city.nameCity,
        data: this.dataRain.rain.slice(0,96),
        color:'#1212ff'
      }]
    }
    Highcharts.chart('containerGraphRain', options);
  }
  
}
