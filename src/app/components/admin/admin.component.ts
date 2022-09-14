import { Component, OnInit } from '@angular/core';
import { io } from "socket.io-client";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
socket:any;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.socket = io('http://localhost:3000');
    this.socket.on('contactAdmin', (data:any) =>{
      console.log(data)
      this.toastr.success('new complaint');
    });
  }

}
