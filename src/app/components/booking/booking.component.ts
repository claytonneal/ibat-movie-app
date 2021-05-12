import { Component, OnInit } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  adultTicket = 0;
  childTicket = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  incrementAdult() {
    if (this.adultTicket <=3) {
      this.adultTicket++;
    }
  }

  decrementAdult() {
    if (this.adultTicket > 0) {
      this.adultTicket--;
      if (this.adultTicket == 0) {
        this.childTicket = 0;
      }
    }
  }

  incrementChild() {
    if (this.adultTicket > 0) {
      if (this.childTicket <= 3) {
        this.childTicket++;
      }
    }
  }

  decrementChild() {
    if (this.childTicket > 0) {
      this.childTicket--;
    }
  }

}
