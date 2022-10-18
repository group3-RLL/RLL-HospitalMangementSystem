import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service'
import { Router } from '@angular/router';
import { Patient } from 'src/app/common/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  searchText = '';
  patient: Patient[];
  role:string = localStorage.getItem('role');

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients(){
    this.patientService.getPatientsList().subscribe(data => {
      this.patient = data;
    });
  }

  patientDetails(id: number){
    this.router.navigate(['patient-details', id]);
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
