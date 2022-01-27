import { Component } from '@angular/core';
import { Flight } from './flight.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listOfFlights:Array<Flight> = [
    new Flight("AS235","BEG","TIV","09-Dec-2021 18:30",9,56),
    new Flight("LT561","ZGD","TGD","14-Dec-2021 21:00",250,77),
    new Flight("WZ940","TGD","SPL","24-Dec-2021 13:30",135,48),
    new Flight("AM391","TIV","BEG","30-Dec-2021 09:35",10,63),
    new Flight("RY212","INI","ZAG","03-Jan-2022 11:20",114,43)
  ];
  
  addFlight(newFlight:Flight){
    this.listOfFlights.push(newFlight);
  }
}
