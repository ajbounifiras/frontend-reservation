import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  Url:string="http://localhost:3000/api/user/";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private httpClient:HttpClient) { }
 
  
    
  register(User:any){
    return this.httpClient.post<User>(this.Url+'register',User,this.httpOptions);
  }
  login(User:any){
    return this.httpClient.post<any>(this.Url+'login',User,this.httpOptions);
  }

  

}


