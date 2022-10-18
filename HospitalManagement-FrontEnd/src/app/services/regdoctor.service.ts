import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Application } from 'src/app/common/application';

@Injectable({
  providedIn: 'root'
})
export class RegdoctorService {

  private baseURL = "http://localhost:9090/api/v1/application";

  constructor(private httpClient: HttpClient) { }


  createApplication(application: Application): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, application);
  }


}
