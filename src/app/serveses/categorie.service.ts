import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from 'src/app/classes/categorie';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  Url:string="http://localhost:3000/api/categorie/";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private httpClient:HttpClient) { }
  getById(id:any){
    return this.httpClient.get<Categorie>(`${this.Url}${id}`);
  }
  getAll(){
    return this.httpClient.get<Categorie[]>(this.Url);
  }
    
  add(categorie:any){
    return this.httpClient.post<Categorie>(this.Url,categorie,this.httpOptions);
  }

  edit(categorie:any){
    return this.httpClient.put<Categorie>(`${this.Url}${categorie._id}`, categorie,this.httpOptions);
  }

  delete(id:any){
    return this.httpClient.delete(`${this.Url}${id}`,this.httpOptions);
  }

}

