import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/common/appointment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppointmentService } from 'src/app/services/appointment.service';
import { window } from 'rxjs-compat/operator/window';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointment:Appointment = new Appointment();
  appointmentService: AppointmentService

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  saveApplication() {

    const url = 'http://localhost:9090/api/v1/appointment';
    this.httpClient.post(url, this.appointment)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.appointment);
    this.saveApplication();
    alert("Appointment Scheduled Successfully");
    this.router.navigate(['/dashboard']);
    
  }
   
}

