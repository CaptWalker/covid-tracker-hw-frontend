import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-assigned-patient-list',
  templateUrl: './assigned-patient-list.component.html',
  styleUrls: ['./assigned-patient-list.component.scss']
})
export class AssignedPatientListComponent implements OnInit {

  displayedColumns: string[] = ['patientId', 'name', 'report', 'final'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor( ) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAssignedPatientsList();
  }

  getAssignedPatientsList = () => {
    // this.service.getListOfPatient().subscribe((response) => {
    //   console.log(response);
    // });
  }

}

export interface PeriodicElement {
  firstName: string;
  lastName: string;
  patientId: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { patientId: "P101", firstName: "John", lastName: "Doe"},
  { patientId: "P102", firstName: "Dhruva", lastName: "Sharma"},
  { patientId: "P103", firstName: "Nakul", lastName: "Gupta"},
  { patientId: "P104", firstName: "Siddharth", lastName: "Bahuguna"},
  { patientId: "P105", firstName: "Sanjay", lastName: "Dixit"},
  { patientId: "P106", firstName: "Shahji", lastName: "Dhole"}
];

