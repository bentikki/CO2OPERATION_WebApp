export class LicenseInfo {
    model : string;
    carbonFootprint : number;

    constructor(make: string, model: string, year: string) {
        this.model = make + ' ' + model + ' - ' + year; 
    }
}
