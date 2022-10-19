import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  role:string = localStorage.getItem('role');
  username:string = localStorage.getItem('username');

  constructor(private route: Router) { }

  

  ngOnInit(): void {
     
  }

 

  logout(){
    this.role = null;
    this.username=null;
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    window.location.replace('/home');
  }

}
