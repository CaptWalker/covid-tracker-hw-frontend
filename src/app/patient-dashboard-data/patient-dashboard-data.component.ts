import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard-data',
  templateUrl: './patient-dashboard-data.component.html',
  styleUrls: ['./patient-dashboard-data.component.scss']
})
export class PatientDashboardDataComponent implements OnInit {

  public doughnutChartLabels = ['Total Test Conducted', 'Total +ve Test', 'Total Recovered', 'Total -ve Test'];
  public doughnutChartData = [100, 15, 30, 55];
  public doughnutTitle = 'Covid Test Data';

  public pieChartLabels = ['High', 'Low'];
  public pieChartData = [30, 70];
  public pieTitle = 'Immunity Quotient';

  public mortalityDoughnutChartLabels = ['Safe', 'High Chances'];
  public mortalityDoughnutChartData = [95, 5];
  public mortalityDoughnutTitle = 'Mortality Rate';

  public pieChartColors = [
    {
      backgroundColor: ['rgb(229, 57, 53)', 'rgb(56, 142, 60, .8)']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
