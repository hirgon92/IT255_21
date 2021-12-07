import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFlightsComponent } from './input-flights.component';

describe('InputFlightsComponent', () => {
  let component: InputFlightsComponent;
  let fixture: ComponentFixture<InputFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
