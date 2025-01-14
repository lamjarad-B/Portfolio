import { ThemeService } from './../theme-service.service';
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkTheme$: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }

  ngOnInit() {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('ul');
    
    burger?.classList.toggle('active');
    menu?.classList.toggle('active');
  }

  // Méthode pour fermer le menu
  closeMenu() {
    if (this.isMenuOpen) {
      const burger = document.querySelector('.burger-menu');
      const menu = document.querySelector('ul');
      
      this.isMenuOpen = false;
      burger?.classList.remove('active');
      menu?.classList.remove('active');
    }
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Vérifie si le clic est en dehors du menu et du bouton burger
    const menu = document.querySelector('ul');
    const burger = document.querySelector('.burger-menu');
    const target = event.target as HTMLElement;

    if (this.isMenuOpen && 
        !menu?.contains(target) && 
        !burger?.contains(target)) {
      this.closeMenu();
    }
  }
}