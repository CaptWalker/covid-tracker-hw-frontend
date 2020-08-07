import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData: ChartDataSets[] = [
    { data: [400, 420, 450, 430, 440, 460], label: 'Expected Herd Immunity' },
    { data: [100, 110, 125, 140, 135, 145], label: 'Total +ve Cases' },
    { data: [60, 65, 75, 70, 80, 85], label: 'Recovered Cases' },
  ];

  lineChartLabels: Label[] = ['26 Jul', '27 Jul', '28 Jul', '29 Jul', '30 Jul', '31 Jul'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#ef6c00',
      backgroundColor: 'rgb(255, 171, 145, 0.28)',
    },
    {
      borderColor: '#c62828',
      backgroundColor: 'rgb(239, 154, 154, 0.28)',
    },
    {
      borderColor: '#0288d1',
      backgroundColor: 'rgb(129, 212, 250, 0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
  ngOnInit(): void {
  }

}
