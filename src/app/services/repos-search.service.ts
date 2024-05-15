import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReposSearchService {
  

  constructor(private baseService:BaseService) { }

  getRepos(searchName: string) {
    return this.baseService.get(`githubApi/?searchName=${searchName}`); 
  }

  registerUser(name:string , email:string , password:string) {
    const body={
      Email:email,
      Name: name,
      PhoneNumber:"",
      Password:password
    }
    return this.baseService.post("AuthAPI/register",body);
  }

  LoginUser(email: string, password: string) {
    const body={
      UserName: email,
      Password:password
    }
    return this.baseService.post("AuthAPI/login",body);
  }
}
