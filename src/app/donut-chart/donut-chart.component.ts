import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  @Input() chartLabels: [];
  @Input() chartData: [];

  constructor() { }
  // public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType;
  public doughnutChartLabels;
  public doughnutChartData;

  ngOnInit(): void {
    console.log(this.chartData, this.chartLabels);
    this.doughnutChartType = 'doughnut';
    this.doughnutChartLabels = this.chartLabels;
    this.doughnutChartData = this.chartData;
  }

}
