import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from 'src/app/classes/produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  
  Url:string="http://localhost:3000/api/produit/";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private httpClient:HttpClient) { }
  getById(id:any){
    return this.httpClient.get<Produit>(`${this.Url}${id}`);
  }
  getAll(){
    return this.httpClient.get<Produit[]>(this.Url);
  }
    
  add(Produit:any){
    return this.httpClient.post<Produit>(this.Url,Produit,this.httpOptions);
  }

  edit(Produit:any){
    return this.httpClient.put<Produit>(`${this.Url}${Produit._id}`, Produit,this.httpOptions);
  }

  delete(id:any){
    return this.httpClient.delete(`${this.Url}${id}`,this.httpOptions);
  }

}

