import { Component, Input } from '@angular/core';
import { GraphTempe } from '../../interface/graph-tempe';
import * as Highcharts from 'highcharts';
import { City } from 'src/app/interface/city';

@Component({
  selector: 'app-tempe-graph [unit] [dataTempe] [city]',
  templateUrl: './tempe-graph.component.html',
  styleUrls: ['./tempe-graph.component.css']
})
export class TempeGraphComponent {
  @Input() unit!:string;
  @Input() dataTempe!:GraphTempe;
  @Input() city!:City;
  ngOnInit(){
    
    const options: any = {
      chart: {
        borderColor: '#1212ff',
        borderWidth: 2,
        type: 'line'
      },
      title: {
        text: "Diagramme de températures ("+this.unit+") pour 4 jour"
      },
      credits: {
        enabled: false
      },
      yAxis:{
        tickInterval:2,
        title:{
          enabled:false
        }

      },
      xAxis: {
        categories: this.dataTempe.time.slice(0,96),
        tickInterval:24,
        title: {
          enabled: true,
          text:"Jour et heure"
        },
      },
      series: [{
        name: this.city.nameCity,
        data: this.dataTempe.temperature_2m.slice(0,96),
        color:'#1212ff'
      }]
    }
    Highcharts.chart('container', options);
  }
}
