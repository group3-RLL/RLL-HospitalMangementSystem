import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Doctor } from '../common/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

    
  private baseURL = "http://localhost:9090/api/v1/doctor";
  private appURL = "http://localhost:9090/api/v1/application";
  constructor(private httpClient: HttpClient) { }

  getDoctorList(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }
  createDoctor(doctor: Doctor): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, doctor);
  }

  getDoctorById(id: number): Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}/${id}`);
  }

  updateDoctor(id: number, doctor: Doctor): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, doctor);
  }

  deleteDoctor(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  deleteApplication(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.appURL}/${id}`);
  }
}