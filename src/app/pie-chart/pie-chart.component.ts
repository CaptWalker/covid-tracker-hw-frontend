import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() chartLabels: [];
  @Input() chartData: [];
  @Input() chartColors: [];

  constructor() { }
  public pieChartLabels;
  public pieChartData;
  public pieChartColors;
  public pieChartType = 'pie';

  ngOnInit(): void {
    this.pieChartData = this.chartData;
    this.pieChartLabels = this.chartLabels;
    this.pieChartColors = this.chartColors;
  }

}
