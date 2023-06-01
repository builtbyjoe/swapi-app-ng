export interface HttpPeopleResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: Person[];
}

export interface Person {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
}