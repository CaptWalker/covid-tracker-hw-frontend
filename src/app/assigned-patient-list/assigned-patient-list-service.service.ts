import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssignedPatientListService {

  constructor(private http: HttpClient) { }

  getListOfPatient = (): Observable<any> => {
    return this.http.get('./assignedPatientsList.json')
    .pipe(
      map((response: any) => response.json()),
      catchError(this.handleError)
    );
  }

  handleError = (error) => {
    console.log(error);
    return error;
  }
}
