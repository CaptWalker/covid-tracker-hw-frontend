import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssignedPatientListService {

  constructor(private http: HttpClient) { }

  getListOfPatient = () => {
    return this.http.get('https://localhost:4200/assets/fakeData/assignedPatientsList.json', {responseType: 'json'})
    .pipe(
      map((response: Observable<any>) => response),
      catchError(this.handleError)
    );
  }

  handleError = (error) => {
    console.log(error);
    return error;
  }
}
