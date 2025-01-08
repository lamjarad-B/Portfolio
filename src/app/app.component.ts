import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProjectsSectionComponent } from "./main/projects-section/projects-section.component";
import { SkillsSectionComponent } from './main/skills-section/skills-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HeaderComponent, ProjectsSectionComponent, SkillsSectionComponent],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Brahim Lamjarad - Portfolio';
}
