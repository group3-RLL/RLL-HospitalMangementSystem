import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {Router} from "@angular/router"
import { User } from 'src/app/common/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = localStorage.getItem('username');
  role:string = localStorage.getItem('role');
  user:User = new User();
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient,private router: Router,private loginService: LoginService,   ) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      username:[''],
      password:[''],
      role:['']
    })
  }


  handleLogin() {

    this._http.get<any>("http://localhost:9090/api/v1/users").subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password && a.role ===this.loginForm.value.role
      })
      if(user){
        localStorage.setItem('role', this.user.role);
        localStorage.setItem('username', this.user.username);
        console.log("YES");
        alert ("Login Succesful!"); 
        window.location.replace('/dashboard'); 
      }else{
        alert("Wrong Credentials!")
      }
    }
    )
  }
  onSubmit(){
    console.log(this.user);
     
    this.handleLogin();
  }


}