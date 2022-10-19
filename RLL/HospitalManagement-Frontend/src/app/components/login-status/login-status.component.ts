import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  role:string = localStorage.getItem('role');

  constructor(private route: Router) { }

  

  ngOnInit(): void {
     
  }

 

  logout(){
    this.role = null;
    localStorage.removeItem("role");
    window.location.replace('/home');
  }

}