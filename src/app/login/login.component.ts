import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReposSearchService } from '../services/repos-search.service';
import { HttpResult } from '../models/httpResult';
import { Constants } from '../helper/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private builder: FormBuilder, private reposSearchService:ReposSearchService, private router:Router){}

  ngOnInit(){}

  loginform = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  LoginUser(){
    let email=this.loginform.controls["email"].value;
    let password=this.loginform.controls["password"].value;
    this.reposSearchService.LoginUser(email,password).subscribe((res:HttpResult)=> {
      if(res.isSuccess==true){
        localStorage.setItem(Constants.USER_KEY,JSON.stringify(res.result));
        this.router.navigate(["/searchRepos"]); 
      }
      else{
        alert(res.message);
      }
    },
    error=>{
      alert("General error");
    });
  }

}
