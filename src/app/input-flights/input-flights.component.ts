import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-input-flights',
  templateUrl: './input-flights.component.html',
  styleUrls: ['./input-flights.component.scss']
})
export class InputFlightsComponent implements OnInit {
  flightNumber: AbstractControl;
  public inputFG = new FormGroup({
    inputFN: new FormControl('', [
      Validators.required, 
      Validators.minLength(5), 
      Validators.pattern(new RegExp('^[A-Z]{2}'))
    ]),
    inputFrom: new FormControl('',Validators.required),
    inputTo: new FormControl('',Validators.required),
    inputDate: new FormControl('',Validators.required),
    inputSeats: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(250)
    ])
  })

  get inputFN(){
    return this.inputFG.get('inputFN')
  }
  get inputFrom(){
    return this.inputFG.get('inputFrom')
  }
  get inputTo(){
    return this.inputFG.get('inputTo')
  }
  get inputDate(){
    return this.inputFG.get('inputDate')
  }
  get inputSeats(){
    return this.inputFG.get('inputSeats')
  }

  @Input() flights:Array<Flight>;
  @Output() newFlightEvent = new EventEmitter<Flight>()
  tempFlight = new Flight("","","","",0);
  constructor() {
   }

  ngOnInit(): void {
    this.flightNumber = this.inputFG.controls['inputFN'];
    this.flightNumber.valueChanges.subscribe(
      (value: string) => {
        console.log('Flight number is: ', value)
      }
    ); 
     
  }
  
  addFlight(flightNumber:HTMLInputElement, fromDestination:HTMLInputElement,toDestination:HTMLInputElement,flightDate:HTMLInputElement,seats:HTMLInputElement){
      this.tempFlight.flight_number = flightNumber.value;
      this.tempFlight.flight_path = fromDestination.value.concat(">").concat(toDestination.value);
      this.tempFlight.flight_date = new Date(flightDate.value);
      this.tempFlight.flight_seats = parseInt(seats.value);

      console.log(this.inputFG.get('inputSeats').errors)
      this.newFlightEvent.emit(this.tempFlight);
  }
  clearForm(form: HTMLFormElement){
    form.reset();
  }
}
