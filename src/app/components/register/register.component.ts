import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/serveses/auth.service';
import { UserService } from 'src/app/serveses/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user=new User;
  constructor(private service:AuthService) { }

  ngOnInit(): void {
  }
register(){
  console.log(this.user)
  this.service.register(this.user).subscribe(data=>{
    console.log(data)
    localStorage.setItem('userData',JSON.stringify(data))
  },err=>{console.log(err)})
}
}
