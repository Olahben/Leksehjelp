import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeworkToDoComponent } from './homework-to-do/homework-to-do.component';
import { HomeworkDoneComponent } from './homework-done/homework-done.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeworkToDoComponent, HomeworkDoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Leksehjelp';
}
