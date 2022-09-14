import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  Url:string="http://localhost:3000/api/user/";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private httpClient:HttpClient) { }
  getById(id:any){
    return this.httpClient.get<User>(`${this.Url}${id}`);
  }
  getAll(){
    return this.httpClient.get<User[]>(this.Url);
  }
    
  add(User:any){
    return this.httpClient.post<User>(this.Url+"register",User,this.httpOptions);
  }

  edit(User:any){
    return this.httpClient.put<User>(`${this.Url}${User._id}`, User,this.httpOptions);
  }

  delete(id:any){
    return this.httpClient.delete(`${this.Url}${id}`,this.httpOptions);
  }
  adduserName(userName:String){
    return this.httpClient.get<any>(`${this.Url}username/${userName}`,this.httpOptions);
  }
 
}


