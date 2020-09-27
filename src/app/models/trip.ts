export class Trip {

    TripID : number;
    UserID : number;
    startTime : Date;
    endTime : Date;
    transportMethod : Number;
    distance : Number;
    totalCo2 : Number;
    startLocation : string;
    endLocation : string;

    constructor(_tripID : number, _UserID : number, _startTime : Date, _endTime : Date, _transportMethod : Number, _distance : Number, 
                _totalCo2 : Number, _startLocation : string, _endLocation : string){
        this.TripID = _tripID;
        this.UserID = _UserID;
        this.startTime = _startTime;
        this.endTime = _endTime;
        this.transportMethod = _transportMethod;
        this.distance = _distance;
        this.totalCo2 = _totalCo2;
        this.startLocation = _startLocation;
        this.endLocation = _endLocation;
    }
}
