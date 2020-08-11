import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PatientRegistration } from './model/patientRegistration';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080';

  // getLoginForPatient = (loginCred): Observable<PatientRegistration> => {
  //   return this.http.post( this.url + '/patientregistration/login', loginCred).pipe(
  //     .
  //   )
  // }
}
