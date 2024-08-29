import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarArrows } from "./calendar-arrows/calendar-arrows.component";
import { CalendarSquare } from "./calendar-square/calendar-square.component";


@Component({
  selector: 'app-calendar',
  template: `
    <section class="center">
      <h1 class="title">Calendar</h1>
      <app-calendar-arrows
        class="year"
        (changedYear)="onChangedYear($event)"
      ></app-calendar-arrows>
    </section>
    <div>
      <div class="container">
        <ng-container *ngFor="let month of getMonths">
          <div class="month-content">
            <div class="month-title">{{ month.name }}</div>
            <ng-container
              *ngFor="let day of daysInMonth(month.number, this.year)"
            >
              <app-calendar-square
                [day]="day"
                [year]="this.year"
                [month]="month.number"
              >
              </app-calendar-square>
            </ng-container>
          </div>
        </ng-container>
      </div>
      <section class="center">
        <app-calendar-arrows
          class="year"
          (changedYear)="onChangedYear($event)"
        ></app-calendar-arrows>
      </section>
    </div>
  `,
  imports: [CommonModule, CalendarArrows, CalendarSquare, CalendarArrows, CalendarSquare],
  standalone: true,
  styleUrls: ['./calendar.scss', '../style.scss'],
})
export class Calendar {
  year = 2024;

  getMonths = [
    { name: 'January', number: 1 },
    { name: 'February', number: 2 },
    { name: 'March', number: 3 },
    { name: 'April', number: 4 },
    { name: 'May', number: 5 },
    { name: 'June', number: 6 },
    { name: 'July', number: 7 },
    { name: 'August', number: 8 },
    { name: 'September', number: 9 },
    { name: 'October', number: 10 },
    { name: 'November', number: 11 },
    { name: 'December', number: 12 },
  ];

  daysInMonth(month: number, year: number) {
    return [...Array(new Date(year, month, 0).getDate()).keys()].map(
      (x) => x + 1
    );
  }

  onChangedYear(_year: number) {
    this.year = _year;
  }
}
