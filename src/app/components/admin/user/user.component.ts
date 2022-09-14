import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/serveses/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listeus:User[]=[];
  us:User=new User();
  constructor(private usr:UserService) { }

  ngOnInit(): void {
    this.getAll();
  }
 add(){
   if(this.us._id==null){
   this.usr.add(this.us).subscribe(data  =>{
    this.getAll();
   })
   }
   else{
     this.usr.edit(this.us).subscribe(data  =>{
      this.getAll();
     })
   }
  
 }
  reset(){
    this.us=new User;
  }
 
  getAll(){
    this.usr.getAll().subscribe(data=>{
      this.listeus=data;
      console.log(this.listeus);
    })
  }
  getById(id:any){
   
    this.usr.getById(id).subscribe(data=>{
      console.log(data)
      this.us=data
    })
    
  }
  deleteById(_id:any){
    this.usr.delete(_id).subscribe(data=>{
      this.getAll();
      this.reset();
    })
  }


}