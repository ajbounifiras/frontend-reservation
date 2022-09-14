import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/classes/checkout';
import { CommandeProduit } from 'src/app/classes/commande-produit';
import { CheckoutService } from 'src/app/serveses/checkout.service';
import { CommandeProduitService } from 'src/app/serveses/commande-produit.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
panier:any=[];
totalPrice:number=0;
checkout=new Checkout;
  constructor(private ch:CheckoutService,private cp:CommandeProduitService) { }

  ngOnInit(): void {
    this.panier=JSON.parse(localStorage.getItem('panier') || '[]');
    this.panier.map((x:{quantity: number;price:number})=>this.totalPrice=this.totalPrice+x.quantity * x.price)
  }
   save(){
    this.checkout.totalPrice=this.totalPrice
    this.ch.add(this.checkout).subscribe(async data=>{
       console.log(data)
       await this.panier.forEach( (element:any) => {
        console.log(element)
        let c=new CommandeProduit;
        c.checkoutId=data._id;
        c.produitId=element._id
        c.quantity=element.quantity
        this.cp.add(c).subscribe()
      });
      this.panier=[]
      localStorage.setItem("panier",JSON.stringify(this.panier))
    })
  }

}

function x(x: any, arg1: { quantity: any; p: any; rice: any; }, arg2: number) {
  throw new Error('Function not implemented.');
}

