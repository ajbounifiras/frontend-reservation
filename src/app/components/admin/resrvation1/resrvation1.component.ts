import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/classes/reservation';
import { reservationService } from 'src/app/serveses/reservation.service';

@Component({
  selector: 'app-resrvation1',
  templateUrl: './resrvation1.component.html',
  styleUrls: ['./resrvation1.component.css']
})
export class Resrvation1Component implements OnInit {
 listr:Reservation[]=[]
  constructor(private se:reservationService) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll(){
  this.se.getAll().subscribe(data=>{
    this.listr=data
    console.log(data)
  })

}
Confirm(cot:any,etat:String){
  cot.etat=etat;
  this.se.edit(cot).subscribe();
  this.getAll();

}
Delete(id:any){
  this.se.delete(id).subscribe()
  this.getAll();
}

}
