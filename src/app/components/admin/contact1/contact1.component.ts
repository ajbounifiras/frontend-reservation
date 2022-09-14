import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/serveses/contact.service';

@Component({
  selector: 'app-contact1',
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.css']
})
export class Contact1Component implements OnInit {
  listeCot:Contact[]=[];
  cot=new Contact;
  constructor(private ct:ContactService) { }

  ngOnInit(): void {
    this.getAll();
  }
 
  reset(){
    this.cot=new Contact;
  }
 
  getAll(){
    this.ct.getAll().subscribe(data=>{
      this.listeCot=data;
      console.log(this.listeCot);
    })
  }
  getById(_id:any){
    this.ct.getById(_id).subscribe(data=>{
      this.cot=data
    })
  }
  deleteById(_id:any){
    this.ct.delete(_id).subscribe(data=>{
      this.getAll();
      this.reset();
    })
  }


}

