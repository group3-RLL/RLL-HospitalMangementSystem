import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/common/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})

export class CreateDoctorComponent implements OnInit {
doctor: Doctor = new Doctor();
constructor(private doctorService: DoctorService,
  private router: Router) { }

ngOnInit(): void {
}

saveDoctor(){
  this.doctorService.createDoctor(this.doctor).subscribe( data =>{
    console.log(data);
    this.goToDoctorList();
  },
  error => console.log(error));
}

goToDoctorList(){
  this.router.navigate(['/doctor']);
}

onSubmit(){
  console.log(this.doctor);
  this.saveDoctor();
}
}