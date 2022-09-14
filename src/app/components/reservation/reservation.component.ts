import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/classes/reservation';
import { reservationService } from 'src/app/serveses/reservation.service';
declare var $:any;
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit, AfterViewInit {
res=new Reservation;

  constructor(private rs:reservationService,) { }
  ngAfterViewInit(): void {
    $(document).ready(function() {
      'use strict';
    /*=================== DATE PICKER ===================*/
      $('#datepicker').datepicker({ 
      uiLibrary: 'bootstrap'
      });
  
      /*=================== TIME PICKER ===================*/
       $('#timepicker3').timepicker({
          minuteStep: 5,
          showInputs: false,
          disableFocus: false
       });
    });
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    
  }
 
save(){
  this.res.time= $("#timepicker3").val(); 
  this.res.date= $("#datepicker").val();  
  console.log(this.res)
  this.rs.add(this.res).subscribe();
}
}
