import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CalendarForm } from '../calendar-form/calendar-form.component';

@Component({
  selector: 'app-calendar-square',
  template: `
    <div class="card-container">
      <mat-card appearance="outlined">
        <mat-card-header
          class="card-content"
          (click)="dateClicked(year, month, day)"
        >
          <mat-card-title> {{ day }}</mat-card-title>
          <mat-card-subtitle>
            {{ getWeekday(year, month, day) }}</mat-card-subtitle
          >
        </mat-card-header>
        <button
          mat-button
          *ngIf="!existingAppointment && !editSquare"
          class="add-new-button"
          (click)="dateClicked(year, month, day)"
        >
          <mat-icon>add</mat-icon>
          Add
        </button>
        <div *ngIf="existingAppointment && !editSquare" class="appointment">
          <div cdkDrag>{{ existingAppointment }}</div>
          <button
            mat-button
            color="success"
            (click)="dateClicked(year, month, day)"
          >
            <mat-icon>create</mat-icon>
            Edit
          </button>
        </div>
        <app-calendar-form-component
          *ngIf="editSquare"
          (newAppointment)="onCreatedAppointment($event)"
          [existingAppointment]="existingAppointment"
        ></app-calendar-form-component>
      </mat-card>
    </div>
  `,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CalendarForm,
  ],
  standalone: true,
  styleUrls: ['calendar-square.scss'],
})
export class CalendarSquare {
  @Input()
  day!: number;
  @Input() month!: number;
  @Input() year!: number;
  existingAppointment: any;
  editSquare = false;

  weekdays = [
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
  ];

  onCreatedAppointment(newAppointment: any) {
    this.existingAppointment = newAppointment;
    this.editSquare = false;
  }

  getWeekday(year: number, monthIndex: number, dayNumber: number) {
    const date = new Date(year, monthIndex, dayNumber);
    let weekday = this.weekdays[date.getDay()];
    return weekday;
  }

  dateClicked(year: number, month: number, day: number) {
    this.editSquare = true;
  }
}
