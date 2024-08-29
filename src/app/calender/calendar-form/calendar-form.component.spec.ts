import { TestBed } from '@angular/core/testing';
import { CalendarForm } from './calendar-form.component';

describe('export class CalendarForm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarForm],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CalendarForm);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('CalendarForm', () => {
    it('should emit value to parent and update form value', () => {
      const fixture = TestBed.createComponent(CalendarForm);
      const component = fixture.componentInstance;
      spyOn(component.newAppointment, 'emit');

      const testText = 'Test text';

      component.updateTextField(testText);
      expect(component.newAppointment.emit).toHaveBeenCalled();
    });
  });
});
