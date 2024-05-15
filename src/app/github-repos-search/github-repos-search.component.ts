import { Component } from '@angular/core';
import { ReposSearchService } from '../services/repos-search.service';
import { HttpResult } from '../models/httpResult';
import { Repository } from '../models/repository';


@Component({
  selector: 'app-github-repos-search',
  templateUrl: './github-repos-search.component.html',
  styleUrl: './github-repos-search.component.css'
})
export class GithubReposSearchComponent {

  
  public repolist: Repository[] = [];
  constructor(private reposSearchService:ReposSearchService) { 
    
  }

  ngOnInit(): void {
  }

  searchRepos(searchName:string){
    this.reposSearchService.getRepos(searchName).subscribe((data:HttpResult) =>{
      if(!data.isSuccess){
        alert(data.message)
      }
      else
      {
        if(data.result){  
            this.repolist = data.result;
          }
        else
        {
          alert("No data found");
        } 
      } 
    },
    error=>{
      alert("General Error");
    });

  }

}
