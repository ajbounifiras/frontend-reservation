import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userData:any;
loginIn:boolean=false;
panier:any=[];
totalPrice:number=0;
  constructor(private route:Router) { }

  async ngOnInit() {
  this.userData = await JSON.parse(localStorage.getItem("userData")|| "");
  if(this.userData!=null){this.loginIn=true;}
  this.getPanier();
  }
 async logout(){
  await localStorage.removeItem("userData");
  this.loginIn=await false;
  this.route.navigateByUrl("")
}
getPanier(){
  this.totalPrice=0;
  this.panier=JSON.parse(localStorage.getItem('panier') || '[]');
  this.panier.forEach((x:any)=>{
    if(x.quantity==null){
      x.quantity=1;
    }
    this.totalPrice=this.totalPrice+(x.quantity*x.price)
  });
  
}
deleteFromPanier(pro:any){
  
  let index=this.panier.findIndex((x: { id: string; }) => x.id ===pro.id);
  console.log(index)
  console.log(this.panier)
  this.panier.splice(index, 1);
  console.log(this.panier)
  localStorage.setItem("panier",JSON.stringify(this.panier));
}
}
