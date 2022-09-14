import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/classes/reservation';


@Injectable({
  providedIn: 'root'
})
export class reservationService {

  
  Url:string="http://localhost:3000/api/reservation/";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private httpClient:HttpClient) { }
  getById(id:any){
    return this.httpClient.get<Reservation>(`${this.Url}${id}`);
  }
  getAll(){
    return this.httpClient.get<Reservation[]>(this.Url);
  }
    
  add(reservation:any){
    return this.httpClient.post<Reservation>(this.Url,reservation,this.httpOptions);
  }

  edit(reservation:any){
    return this.httpClient.put<Reservation>(`${this.Url}${reservation._id}`, reservation,this.httpOptions);
  }

  delete(id:any){
    return this.httpClient.delete(`${this.Url}${id}`,this.httpOptions);
  }

}


