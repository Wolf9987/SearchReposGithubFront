import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReposSearchService } from '../services/repos-search.service';
import { HttpResult } from '../models/httpResult';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private builder: FormBuilder, private reposSearchService:ReposSearchService){}

  ngOnInit(){}

  registrationform = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    password: ['', Validators.required]
  });

  Register(){
    let name=this.registrationform.controls["name"].value;
    let email=this.registrationform.controls["email"].value;
    let password=this.registrationform.controls["password"].value;
    this.reposSearchService.registerUser(name,email,password).subscribe((res:HttpResult)=> {
      if(res.isSuccess==true){
        alert("Success. Please login");
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
