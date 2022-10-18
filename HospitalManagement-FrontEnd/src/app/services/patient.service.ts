import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Patient } from 'src/app/common/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:9090/api/v1/patient";
  private appURL = "http://localhost:9090/api/v1/application";


  constructor(private httpClient: HttpClient) { }
  
  getPatientsList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
  }

  createPatient(employee: Patient): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getPatientById(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);
  }

  updatePatient(id: number, patient: Patient): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, patient);
  }

  deletePatient(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  deleteApplication(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.appURL}/${id}`);
  }

}
