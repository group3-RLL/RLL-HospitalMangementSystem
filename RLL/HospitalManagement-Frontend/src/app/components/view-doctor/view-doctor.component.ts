import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/common/doctor';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {

  
  id: number
  doctor: Doctor
  constructor(private route: ActivatedRoute, private doctorService : DoctorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.doctor= new Doctor();
    this.doctorService.getDoctorById(this.id).subscribe( data => {
      this.doctor = data;
    });
  }
}