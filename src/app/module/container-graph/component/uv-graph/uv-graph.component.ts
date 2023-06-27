import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { City } from 'src/app/interface/city';
import { GraphUv } from '../../interface/graph-uv';

@Component({
  selector: 'app-uv-graph [unit] [dataUv] [city]',
  templateUrl: './uv-graph.component.html',
  styleUrls: ['./uv-graph.component.css']
})
export class UvGraphComponent {
  @Input() unit!:string;
  @Input() dataUv!:GraphUv;
  @Input() city!:City;
  ngOnInit(){
    const options: any = {
      chart: {
        borderColor: '#1212ff',
        borderWidth: 2,
        type: 'line'
      },
      title: {
        text: "Diagramme des indices Uv pour 4 jour"
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
        categories: this.dataUv.time.slice(0,96),
        tickInterval:24,
        
      },
      series: [{
        name: this.city.nameCity,
        data: this.dataUv.uv_index.slice(0,96),
        color:'#1212ff',
        marker:{
          enabled:false
        }
      }]
    }
    Highcharts.chart('containerGraphUv', options);
  }
  
}
