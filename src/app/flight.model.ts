export class Flight{
    flight_number:string;
    flight_path:string;
    flight_date:Date;
    flight_seats:number;
    flight_price:number;

    constructor(fNumber:string, fFrom:string, fTo:string,fDate:string,fSeats:number, fPrice:number){
        this.flight_number = fNumber;
        this.flight_path = fFrom + '>' + fTo;
        this.flight_date = new Date(fDate);
        this.flight_seats = fSeats;
        this.flight_price = fPrice;
    }

}