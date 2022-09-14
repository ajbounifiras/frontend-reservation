import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Checkout } from 'src/app/classes/checkout';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  Url:string="http://localhost:3000/api/checkout/";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private httpClient:HttpClient) { }
  getById(id:any){
    return this.httpClient.get<Checkout>(`${this.Url}${id}`);
  }
  getAll(){
    return this.httpClient.get<Checkout[]>(this.Url);
  }
    
  add(checkout:any){
    return this.httpClient.post<Checkout>(this.Url,checkout,this.httpOptions);
  }

  edit(checkout:any){
    return this.httpClient.put<Checkout>(`${this.Url}${checkout._id}`, checkout,this.httpOptions);
  }

  delete(id:any){
    return this.httpClient.delete(`${this.Url}${id}`,this.httpOptions);
  }

}
