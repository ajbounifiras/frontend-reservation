import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandeProduit } from '../classes/commande-produit';

@Injectable({
  providedIn: 'root'
})
export class CommandeProduitService {

  Url:string="http://localhost:3000/api/cp/";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get(this.Url);
  }

  getByCommande(checkouId:String){
    return this.httpClient.get<any[]>(this.Url+'byCommande/'+checkouId);
  }
    
  add(cp:any){
    return this.httpClient.post<CommandeProduit>(this.Url+'add',cp,this.httpOptions);
  }

  delete(id:any){
    return this.httpClient.delete(`${this.Url}${id}`,this.httpOptions);
  }
}
