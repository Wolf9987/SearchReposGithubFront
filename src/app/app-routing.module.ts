import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubReposSearchComponent } from './github-repos-search/github-repos-search.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuardService } from './guards/auth.service';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signUp',component:RegistrationComponent},
  {path:'searchRepos',component:GithubReposSearchComponent,canActivate:[AuthGuardService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
