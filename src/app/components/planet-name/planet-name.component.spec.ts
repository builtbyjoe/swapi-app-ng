import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetNameComponent } from './planet-name.component';

describe('PlanetNameComponent', () => {
  let component: PlanetNameComponent;
  let fixture: ComponentFixture<PlanetNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetNameComponent]
    });
    fixture = TestBed.createComponent(PlanetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
