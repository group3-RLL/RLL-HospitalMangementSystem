import { Component, OnInit } from '@angular/core';
import { Application} from 'src/app/common/application';
import { DoctorService } from 'src/app/services/doctor.service';
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
  constructor(private doctorService: DoctorService,private route: ActivatedRoute, private httpClient: HttpClient) { }

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
      this.doctorService.deleteApplication(id).subscribe( data => {
        console.log(data);
        this.getApplication();
      })

    alert("Application Approved. Mail sent to applicant!")
  }

  reject(id: number){
      this.doctorService.deleteApplication(id).subscribe( data => {
        console.log(data);
        this.getApplication();
      })

    alert("Application Rejected.")
  }

}
