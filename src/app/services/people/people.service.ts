import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpPeopleResponse, Person } from './people.model';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeople(url: string | null, searchTerm: string) {
    return this.http.get<HttpPeopleResponse>(`${url !== null ? `${url}&` : 'https://swapi.dev/api/people/?'}${searchTerm !== '' ? `search=${searchTerm}` : ''}`)
  }
}
