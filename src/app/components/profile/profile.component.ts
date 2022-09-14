import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/serveses/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 userData:any;
 user=new User;
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.getuser();
   
  }
async getuser(){
  this.userData=await JSON.parse(localStorage.getItem("userData")||"{}")
  console.log(this.userData)
  this.service.adduserName(this.userData.userName).subscribe(data=>{
    this.user=data;
    console.log(data);
  }) 
}
}
