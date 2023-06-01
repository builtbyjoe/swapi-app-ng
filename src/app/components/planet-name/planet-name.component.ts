import { Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { PlanetsService } from 'src/app/services/planets/planets.service';

@Component({
  selector: 'app-planet-name',
  templateUrl: './planet-name.component.html',
})
export class PlanetNameComponent {
  @Input() url = '';
  name: string = '';
  
  constructor(private planetsService: PlanetsService) {}

  ngOnInit() {
    this.planetsService
    .getPlanet(this.url)
    .pipe(map((x) => x.name))
    .subscribe({
      next: (response) => {
        this.name = response;
      },
      error: () => {
        this.name = 'Unknown';
      }
    });
  }
}
