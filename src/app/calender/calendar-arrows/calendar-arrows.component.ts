import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calendar-arrows',
  template: `
    <button mat-button color="primary" (click)="changeYear('-')">
      <mat-icon>keyboard_arrow_left</mat-icon>
      {{ this.year - 1 }}
    </button>
    {{ this.year }}
    <button mat-button color="primary" (click)="changeYear('+')">
      <mat-icon iconPositionEnd>keyboard_arrow_right</mat-icon>
      {{ this.year + 1 }}
    </button>
  `,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  standalone: true,
  styleUrls: ['../../style.scss'],
})
export class CalendarArrows {
  year = 2024;

  @Output() changedYear = new EventEmitter<number>();

  constructor() {}

  changeYear(prevOrNext: string) {
    if (prevOrNext === '-') {
      this.year--;
    } else this.year++;
    this.changedYear.emit(this.year);
  }
}
