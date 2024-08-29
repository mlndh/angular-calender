import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-calendar-form-component',
  template: `
    <div class="form-container" color="primary">
      <mat-form-field color="primary">
        <mat-label color="primary">Type here</mat-label>

        <textarea matInput [formControl]="textField" color="primary">
        </textarea>
      </mat-form-field>

      <div class="button-container">
        <button
          mat-flat-button
          (click)="updateTextField(textField)"
          color="accent"
        >
          Save
        </button>
        <button mat-flat-button (click)="reset()">Cancel</button>
        <button
          mat-flat-button
          *ngIf="existingAppointment"
          (click)="remove()"
          color="warn"
        >
          Delete
        </button>
      </div>
    </div>
  `,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  standalone: true,
  styleUrls: ['calendar-form.scss', '../../style.scss'],
})
export class CalendarForm implements OnInit {
  @Input() existingAppointment!: any;
  @Output() newAppointment = new EventEmitter<any>();
  textField = new FormControl('');

  ngOnInit() {
    this.textField.setValue(this.existingAppointment);
  }

  updateTextField(inputValue: any) {
    this.textField.setValue(inputValue.value);
    this.newAppointment.emit(inputValue.value);
  }

  reset() {
    this.newAppointment.emit(this.existingAppointment);
  }

  remove() {
    this.newAppointment.emit('');
  }
}
