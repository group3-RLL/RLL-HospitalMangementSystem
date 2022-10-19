import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/common/application';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegdoctorService } from 'src/app/services/regdoctor.service'

@Component({
  selector: 'app-regdoc',
  templateUrl: './regdoc.component.html',
  styleUrls: ['./regdoc.component.css']
})
export class RegdocComponent implements OnInit {

  application: Application = new Application();
  regdoctorService: RegdoctorService;

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  saveApplication() {

    const url = 'http://localhost:9090/api/v1/application';
    this.httpClient.post(url, this.application)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.application);
    this.saveApplication();
    alert("Form Submitted Successfully");
    this.router.navigate(['/home']);
    
  }
   
}
