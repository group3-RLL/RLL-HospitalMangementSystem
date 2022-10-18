import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


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
    
 