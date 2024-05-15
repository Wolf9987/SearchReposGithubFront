import { Component } from '@angular/core';
import { Constants } from '../helper/constants';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  constructor(){}
  ngOnInit(){}

  isUserLogin()
  {
    const user=localStorage.getItem(Constants.USER_KEY);
    return user && user.length>0;
  }
  onLogout()
  {
    localStorage.removeItem(Constants.USER_KEY);
  }

}
