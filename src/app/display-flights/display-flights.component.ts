import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.scss']
})
export class DisplayFlightsComponent implements OnInit {

  @Input() flightsToShow: Array<Flight>;

  constructor() { }

  ngOnInit(): void {
  }
  checkSeats(seats: Number): boolean {
    return seats <= 10 ? true : false;
  }

  // Fisher-Yates shuffle algorithm
  shuffleArray(array: any[]) {
    var n = array.length, i, t;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
    return array;
  }
}
