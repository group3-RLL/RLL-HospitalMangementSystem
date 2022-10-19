import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Invoice } from "../common/invoice";
import { Observable } from "rxjs";

const baseURL="http://localhost:9090/api/v1/invoice";
@Injectable({
    providedIn: 'root'
})

export class Invoicesearch{
constructor(private http: HttpClient){}

read(id: any): Observable<any> {
    console.log(id)
    return this.http.get(`${baseURL}/${id}`);
  }
}