import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Patient } from 'src/app/common/patient';
import { PatientService } from 'src/app/services/patient.service';



@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})


export class PatientListComponent implements OnInit {
  
  username:string = localStorage.getItem('username');
  role:string = localStorage.getItem('role');
  patient:Patient[];


  constructor(  private patientService: PatientService,
    private router: Router, private route: ActivatedRoute,private formbuiler: FormBuilder, private api: PatientService, private _http:HttpClient) { }

  ngOnInit(): void {
    this.getPatients();
   
  }
  private getPatients(){
    this.patientService.getPatientsList().subscribe(data => {
      this.patient = data;
    });
  }

  patientDetails(id: number){
    this.router.navigate(['view-patient', id]);
  }

  updatePatient(id: number){
    this.router.navigate(['update-patient', id]);
  }

  deletePatient(id: number){
    this.patientService.deletePatient(id).subscribe( data => {
      console.log(data);
      this.getPatients();
    })
  }
}
  
