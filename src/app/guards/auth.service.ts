import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Constants } from '../helper/constants';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }

  //Guard for Jwt
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
    if (user)
    {
      return true;

    }else
    {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
