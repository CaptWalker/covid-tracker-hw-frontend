import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';

const routes: Routes = [
  { path: 'home', component: LoginRegistrationComponent },
  { path: 'dashboard', component: PatientDashboardComponent },
  { path: 'docdashboard', component: DoctorDashboardComponent },
  { path: 'home/register', component: RegisterPatientComponent},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
