import { TestBed } from '@angular/core/testing';
import { CalendarArrows } from './calendar-arrows.component';

describe('export class CalendarArrows', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarArrows],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CalendarArrows);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('calendarForm', () => {
    it('should return year 2023 and emit value to parent', () => {
      const fixture = TestBed.createComponent(CalendarArrows);
      const component = fixture.componentInstance;
      spyOn(component.changedYear, 'emit');

      const prev = '-';

      component.changeYear(prev);
      expect(component.year).toEqual(2023);
      expect(component.changedYear.emit).toHaveBeenCalled();
    });
  });
});
