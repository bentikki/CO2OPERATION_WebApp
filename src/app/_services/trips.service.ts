import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Trip[]>('https://api.mocki.io/v1/0087ae02');
  }
}
