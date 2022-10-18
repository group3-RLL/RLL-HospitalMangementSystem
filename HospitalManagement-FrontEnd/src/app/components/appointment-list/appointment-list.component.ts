import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/common/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[];
  doctorname: string;
  username:string =localStorage.getItem('username');
  role:string = localStorage.getItem('role');
  constructor(private appointmentService: AppointmentService,
    private router: Router) { }

  ngOnInit(): void {

    this.getAppointments();
  }

  private getAppointments() {
    this.appointmentService.getAppointmentslist().subscribe(data => {this.appointments = data;
      });
      console.log(this.username)
      console.log(this.role)
  }

  deleteAppointment(id: number){ 
    this.appointmentService.deleteAppointment(id).subscribe( data => { 
      console.log(data);
      this.getAppointments();
    })
  }

  attended(id: number){ 
    this.appointmentService.deleteAppointment(id).subscribe( data => { 
      console.log(data);
      alert("Patient Attended! ")
      this.getAppointments();
    })
  }

}
