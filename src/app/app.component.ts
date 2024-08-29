import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Calendar } from './calender/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Calendar, ReactiveFormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-calendar-app';
}
