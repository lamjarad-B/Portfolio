import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HeaderComponent],
  templateUrl: 'app.component.html', // pas besoin d'un chemin relatif puisque les deux fichiers se trouvent dans le même dossier
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Brahim Lamjarad - Portfolio';
}
