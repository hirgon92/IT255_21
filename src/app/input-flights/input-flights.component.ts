import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-input-flights',
  templateUrl: './input-flights.component.html',
  styleUrls: ['./input-flights.component.scss']
})
export class InputFlightsComponent implements OnInit {

  @Input() flights:Array<Flight>;
  @Output() newFlightEvent = new EventEmitter<Flight>()
  tempFlight = new Flight("","","","",0);
  constructor() { }

  ngOnInit(): void {
  }
  
  addFlight(flightNumber:HTMLInputElement, fromDestination:HTMLInputElement,toDestination:HTMLInputElement,flightDate:HTMLInputElement,seats:HTMLInputElement){
      this.tempFlight.flight_number = flightNumber.value;
      this.tempFlight.flight_path = fromDestination.value.concat(">").concat(toDestination.value);
      this.tempFlight.flight_date = new Date(flightDate.value);
      this.tempFlight.flight_seats = parseInt(seats.value);

      this.newFlightEvent.emit(this.tempFlight);
  }
  clearForm(form: HTMLFormElement){
    form.reset();
  }
}
