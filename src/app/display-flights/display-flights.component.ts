import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.scss']
})
export class DisplayFlightsComponent implements OnInit {

  @Input() flightsToShow: Array<Flight>;
  @Output() flightToUpdate: EventEmitter<Flight>;
  @Output() flightToDelete: EventEmitter<Flight>;
  private spawnForm: boolean = false;
  private flight_booked: boolean = false;
  private flight_ID: string;
  private calculateService;
  private calculatedPrice;

  public bookingForm = new FormGroup({
    bookingInput: new FormControl("",[
      Validators.required, 
      Validators.pattern(new RegExp('^[1-9]+$'))
    ])
  });

  get bookingInput(){
    return this.bookingForm.get('bookingInput')
  }
  
  constructor(BookService: BookServiceService) {
    this.calculateService = BookService;
  }

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
  editFlight(currentFlight: Flight) {
    this.flight_ID = currentFlight.flight_number;
    this.spawnForm = !this.spawnForm;
  }
  onEdit(editFlightNumber: HTMLInputElement, editFromD: HTMLInputElement, editToD: HTMLInputElement, editFlightDate: HTMLInputElement, editSeats: HTMLInputElement) {
    this.flightsToShow.forEach(flight => {
      if (this.flight_ID == flight.flight_number) {
        flight.flight_number = editFlightNumber.value.toString();
        flight.flight_path = editFromD.value.toString().concat(">").concat(editToD.value.toString());
        flight.flight_date = new Date(editFlightDate.value);
        flight.flight_seats = parseInt(editSeats.value);
      }
    });
  }

  removeFlight(currentFlight: Flight) {
    this.flightsToShow.forEach(flight => {
      if (currentFlight.flight_number == flight.flight_number) [
        this.flightsToShow.splice(this.flightsToShow.indexOf(flight), 1)
      ]
    });
  }
  spawnEdit(): boolean {
    return this.spawnForm;
  }

  onBook(currentFlight: Flight) {
    this.flight_ID = currentFlight.flight_number;
    this.calculateService.tempFlight = currentFlight;
    this.flight_booked = !this.flight_booked;
  }
  flightBooked(): boolean {
    return this.flight_booked;
  }

  onCalculate(numberOfTickets: HTMLInputElement) {
   this.calculatedPrice = this.calculateService.calculateTrip(parseInt(numberOfTickets.value))
  }

  priceCalculated(){
    return true
  }
}
