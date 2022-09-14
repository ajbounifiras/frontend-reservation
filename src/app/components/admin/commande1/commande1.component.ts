import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/classes/checkout';
import { Produit } from 'src/app/classes/produit';
import { CheckoutService } from 'src/app/serveses/checkout.service';
import { CommandeProduitService } from 'src/app/serveses/commande-produit.service';
import { ProduitService } from 'src/app/serveses/produit.service';

@Component({
  selector: 'app-commande1',
  templateUrl: './commande1.component.html',
  styleUrls: ['./commande1.component.css']
})
export class Commande1Component implements OnInit {
  listCommande:Checkout[]=[];
  listProduct:any[]=[]
  showModal=false;
  constructor(private cs:CheckoutService, private cp:CommandeProduitService,private ps:ProduitService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.cs.getAll().subscribe(data=>{
      this.listCommande=data
      console.log(data)
    })
  }
  getByCommande(id:String){
    this.showModal=true
    this.listProduct=[]
    this.cp.getByCommande(id).subscribe(data=>{
      console.log(data)
      let tab=[...data]
      tab.forEach((element: any) => {
        this.ps.getById(element.produitId).subscribe(data=>{
          let elem:any=data
          elem.quantity=element.quantity
          this.listProduct.push(elem)
        })
      });
    })
  }
  close(){
    this.showModal=false
  }
  deleteCommande(id:String){
    this.cs.delete(id).subscribe(data=>this.getAll())
  }
}
