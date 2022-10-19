import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Doctor } from 'src/app/common/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';



@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})


export class DoctorComponent implements OnInit {
  
  username:string = localStorage.getItem('username');
  doctor:Doctor[];


  constructor(  private doctorService: DoctorService,
    private router: Router, private route: ActivatedRoute,private formbuiler: FormBuilder, private api: DoctorService, private _http:HttpClient) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors(){
    this.doctorService.getDoctorList().subscribe(data => {
      this.doctor = data;
    });
  }

  doctorDetails(id: number){
    this.router.navigate(['view-doctor', id]);
  }

  updateDoctor(id: number){
    this.router.navigate(['update-doctor', id]);
  }

  deleteDoctor(id: number){
    this.doctorService.deleteDoctor(id).subscribe( data => {
      console.log(data);
      this.getDoctors();
    })
  }
}
  
