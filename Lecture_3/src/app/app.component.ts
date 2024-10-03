import { Component } from '@angular/core';
import { NewComponent } from './new/new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lecture_3';
}
