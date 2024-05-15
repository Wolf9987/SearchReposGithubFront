import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResult } from '../models/httpResult';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private readonly baseUrl:string="https://localhost:7257/api/"
  constructor(private httpClient:HttpClient) { }

  public get(path:string){
    return this.getWithFullPath(`${this.baseUrl}${path}`);
  }
  public post(path:string, data:any){
    return this.postWithFullPath(`${this.baseUrl}${path}`, data);
  }

  getWithFullPath(path: string) {
    return this.httpClient.get(path);
  }

  postWithFullPath(path: string, data: any) {
    return this.httpClient.post(path, data);
  }
}
