import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/classes/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  
  Url:string="http://localhost:3000/api/contact/";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private httpClient:HttpClient) { }
  getById(id:any){
    return this.httpClient.get<Contact>(`${this.Url}${id}`);
  }
  getAll(){
    return this.httpClient.get<Contact[]>(this.Url);
  }
    
  add(Contact:any){
    return this.httpClient.post<Contact>(this.Url,Contact,this.httpOptions);
  }

  edit(Contact:any){
    return this.httpClient.put<Contact>(`${this.Url}${Contact._id}`, Contact,this.httpOptions);
  }

  delete(id:any){
    return this.httpClient.delete(`${this.Url}${id}`,this.httpOptions);
  }

}
