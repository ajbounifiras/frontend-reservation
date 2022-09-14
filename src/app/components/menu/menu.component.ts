import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/classes/categorie';
import { Produit } from 'src/app/classes/produit';
import { CategorieService } from 'src/app/serveses/categorie.service';
import { ProduitService } from 'src/app/serveses/produit.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
listpro:Produit[]=[];
listcat:Categorie[]=[]
alllistpro:Produit[]=[]
panier:any=[];
  constructor(private pt:ProduitService,private ct:CategorieService) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCategorie();
    this.panier=JSON.parse(localStorage.getItem('panier') || '[]');
    this.panier.forEach((x:any)=>{
      if(x.quantity==null){
        x.quantity=1;
      }
    });
  }
 getProduct(){
   this.pt.getAll().subscribe(data=>
   {
     console.log(data)
     this.listpro=data
     this.alllistpro=[...this.listpro]
   } )
 }
 getCategorie(){
   this.ct.getAll().subscribe(data=>
    {
      this.listcat=data
    });
 }
 getByCategorie(id:any){
   this.listpro=[...this.alllistpro]
   this.listpro=[...this.listpro.filter(x=>x.categorieId==id)]
   console.log(this.listpro)
 }
 reset(){
   this.listpro=[...this.alllistpro]
 }
 addToCart(pro:any){
  this.panier=JSON.parse(localStorage.getItem('panier') || '[]');
   let index=this.panier.findIndex((x: { _id: string; }) => x._id ===pro._id);
   console.log(index)
   if(index==-1){
     pro.quantity=1;
    this.panier.push(pro)
   }else{
     this.panier[index].quantity++;
   }
   console.log(this.panier)
   localStorage.setItem("panier",JSON.stringify(this.panier));
 }
}
