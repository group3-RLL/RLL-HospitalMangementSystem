import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Doctor } from 'src/app/common/doctor';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { timeoutWith } from 'rxjs/operators';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  role:string = localStorage.getItem('role');
  username:string =localStorage.getItem('username')

    constructor(){}
    ngOnInit() {
    console.log(this.role);
    console.log(this.username);
    }
  }
    
 