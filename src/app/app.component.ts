import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
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

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  // Écoute l'événement de défilement de la fenêtre
  @HostListener('window:scroll')
  onWindowScroll() {
    // Récupère la position actuelle du scroll
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // Gestion du bouton "Retour en haut"
    const toTopButton = this.el.nativeElement.querySelector('.to-top');
    // Affiche le bouton après 200px de défilement
    if (scrollPosition > 200) {
      this.renderer.addClass(toTopButton, 'show');
    } else {
      this.renderer.removeClass(toTopButton, 'show');
    }

    // Gestion de la navigation
    const header = this.el.nativeElement.querySelector('.header');
   // const navElements = document.querySelectorAll('.nav, #icone, .closeMenu');
    // Change le style de la navigation après 25px de défilement
    if (scrollPosition > 100) {
      this.renderer.addClass(header, 'scroll');
    } else {
      this.renderer.removeClass(header, 'scroll');
    }
  }

  // Fonction de défilement vers le haut avec animation
  scrollToTop(event: Event) {
    event.preventDefault();
    // Calcule le pas de défilement pour une animation de 800ms
    const scrollStep = -window.scrollY / (50 / 15);
    // Crée une animation fluide avec setInterval
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Intervalle de 15ms pour une animation fluide
  }
}