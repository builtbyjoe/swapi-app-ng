import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Planet from './planets.model';

@Injectable({ providedIn: 'root' })
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getPlanet(url: string) {
    return this.http.get<Planet>(url)
  }
}
