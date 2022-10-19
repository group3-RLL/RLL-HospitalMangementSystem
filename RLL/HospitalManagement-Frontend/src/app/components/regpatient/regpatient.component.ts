import { Component, OnInit } from '@angular/core';
import {Patient } from 'src/app/common/patient';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PatientService } from 'src/app/services/patient.service'


@Component({
  selector: 'app-regpatient',
  templateUrl: './regpatient.component.html',
  styleUrls: ['./regpatient.component.css']
})
export class RegpatientComponent implements OnInit {
  
  role:string =localStorage.getItem('role');
  patient: Patient = new Patient();
  patientService: PatientService;

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  saveApplication() {

    const url = 'http://localhost:9090/api/v1/patient';
    this.httpClient.post(url, this.patient)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.patient);
    console.log(this.role)
    this.saveApplication();
    alert("Patient Registered Successfully");
  }
   
}




