import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProjectsSectionComponent } from "./main/projects-section/projects-section.component";
import { SkillsSectionComponent } from './main/skills-section/skills-section.component';
import { ContactSectionComponent } from './main/contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { EducationSectionComponent } from './main/education-section/education-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HeaderComponent, ProjectsSectionComponent, SkillsSectionComponent, ContactSectionComponent, FooterComponent, EducationSectionComponent],
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
    const scrollPosition =
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
    // Gestion du bouton "Retour en haut"
    const toTopButton = this.el.nativeElement.querySelector('.to-top');
    const headerElement = this.el.nativeElement.querySelector('.header');
  
    // Vérifie si l'élément header est présent pour éviter les erreurs
    if (headerElement) {
      const headerWidth = headerElement.offsetWidth; // Récupère la largeur de .header
  
      // Condition : scrollPosition > 200 ET largeur de .header > 992px
      if (scrollPosition > 200 && headerWidth > 992) {
        this.renderer.addClass(toTopButton, 'show');
      } else {
        this.renderer.removeClass(toTopButton, 'show');
      }
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

  // Observateur de redimensionnement pour l'élément header
  ngAfterViewInit() {
    const headerElement = this.el.nativeElement.querySelector('.header');
    if (headerElement) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const width = entry.contentRect.width;
          console.log('Header width:', width);
        }
      });

      resizeObserver.observe(headerElement);
    }
  }
}