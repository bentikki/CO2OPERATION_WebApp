import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LicenseInfo } from '../models/licenseinfo';

@Injectable({
  providedIn: 'root'
})
export class LicenseplateService {

  constructor(
    private http: HttpClient
  ) { }

  getLicenseInfo(licensePlate : string) : Observable<LicenseInfo>{
    
    //let testLicense = 'BS34397';
    const tokenKey = 'bkhww7bhs64f1v63yvmgamhvj05mhbmu';

    const motorApiURL = 'https://v1.motorapi.dk/vehicles/'+ licensePlate +'';
    const environmentlURL = motorApiURL + '/environment'

    var subject = new Subject<LicenseInfo>();
    
    let headers = new HttpHeaders();
    headers = headers.set('X-AUTH-TOKEN', tokenKey);
    this.http.get<any>(motorApiURL, { headers: headers }).subscribe(
      data => {
        const licenseInfo = new LicenseInfo(data.make, data.model, data.model_year);
        console.log('License info standard:');
        console.log(data);

        this.http.get<any>(environmentlURL, { headers: headers }).subscribe(
          enviromentalData => {
            licenseInfo.carbonFootprint = enviromentalData.co2_emission;
            console.log('Enviromental info');
            console.log(enviromentalData);
            console.log('licenseInfo returned');
            console.log(licenseInfo);

            subject.next(licenseInfo);
          }
        );
      }
    );
    
    return subject.asObservable();
  }
}
