import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/serveses/contact.service';
import { io } from "socket.io-client";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact=new Contact;
show=false;
socket:any;
  constructor(private co:ContactService) { }

  ngOnInit(): void {
    this.socket = io('http://localhost:3000');
    
    
  }
save(){
  this.socket.emit('contact', 'hello from front');
  this.co.add(this.contact).subscribe(data=>
    {
      this.show=true;
      
    })
}
}
