import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ChartsModule } from 'ng2-charts';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PatientDashboardDataComponent } from './patient-dashboard-data/patient-dashboard-data.component';
import { PatientPhysicalHealthComponent } from './patient-physical-health/patient-physical-health.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AssignedPatientListComponent } from './assigned-patient-list/assigned-patient-list.component';
import { UnassignedPatientListComponent } from './unassigned-patient-list/unassigned-patient-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PatientDashboardComponent,
    BarGraphComponent,
    DonutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    LineChartComponent,
    LoginRegistrationComponent,
    NavbarComponent,
    LoginComponent,
    RegisterPatientComponent,
    PatientDashboardDataComponent,
    PatientPhysicalHealthComponent,
    DoctorDashboardComponent,
    AssignedPatientListComponent,
    UnassignedPatientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ChartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
