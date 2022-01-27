import { Injectable } from '@angular/core';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  tempFlight: Flight;

  calculateTrip(passengers: number){
    return passengers * this.tempFlight.flight_price;
  }
  constructor() { }
}
