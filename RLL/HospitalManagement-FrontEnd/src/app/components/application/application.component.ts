import { Component, OnInit } from '@angular/core';
import { Application} from 'src/app/common/application';
import { PatientService } from 'src/app/services/patient.service'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  role: string =localStorage.getItem('role')
  application: Application = new Application();
  deleteId: string;
  constructor(private patientService: PatientService,private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getApplication();
  }
  getApplication() {this.httpClient.get<any>('http://localhost:9090/api/v1/application').subscribe(
    response => {
      console.log(response);
      this.application = response;
    }
  );
  }

  approve(id: number){

    alert("Application Approved. Mail sent to applicant!")
  }

  reject(id: number){

    alert("Application Rejected.")
  }

}
