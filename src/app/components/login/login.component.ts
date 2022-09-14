import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/serveses/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= new User;
  erreur:Boolean=false;
  constructor(private service:AuthService,private route:Router) {

   }

  ngOnInit(): void {
  }
 login(){
   console.log(this.user)
   this.service.login(this.user).subscribe(async (data)=>{
     console.log(data);
     if(data.token!=null){

     await localStorage.setItem("userData",JSON.stringify(data));
     await localStorage.setItem("token",data.token);
    
     if(data.role=="admin"){
       this.route.navigateByUrl("/admin")
     }else{
       this.route.navigateByUrl("")
     }
     }
     },erreur=>{console.log(erreur);this.erreur=true}) 
 }
 }
  