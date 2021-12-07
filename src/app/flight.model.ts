export class Flight{
    flight_number:string;
    flight_path:string;
    flight_date:Date;
    flight_seats:number;

    constructor(fNumber:string, fFrom:string, fTo:string,fDate:string,fSeats:number){
        this.flight_number = fNumber;
        this.flight_path = fFrom + '>' + fTo;
        this.flight_date = new Date(fDate);
        this.flight_seats = fSeats;
    }
}