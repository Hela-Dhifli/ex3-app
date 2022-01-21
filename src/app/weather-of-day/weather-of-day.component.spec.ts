import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherOfDayComponent } from './weather-of-day.component';

describe('WeatherOfDayComponent', () => {
  let component: WeatherOfDayComponent;
  let fixture: ComponentFixture<WeatherOfDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherOfDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
