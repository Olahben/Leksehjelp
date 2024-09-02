import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LekserMaaGjoresComponent } from './lekser-maa-gjores/lekser-maa-gjores.component';
import { LekserGjortComponent } from './lekser-gjort/lekser-gjort.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LekserMaaGjoresComponent, LekserGjortComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Leksehjelp';
}
