import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPrintModule} from 'ngx-print';
import { HomeComponent } from './components/home/home.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
 
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'createappointment', component: CreateAppointmentComponent},
  {path: 'home', component: HomeComponent},
  {path: 'patient', component: PatientListComponent},
  {path: 'appointment', component: AppointmentListComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginStatusComponent,
    DashboardComponent,
    HomeComponent,
    CreateAppointmentComponent,
    AppointmentListComponent,
    PatientListComponent,
    DoctorComponent,
    InvoiceComponent
  ],
  imports: [ 
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxPrintModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }