import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkTheme.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      // Vérifier et appliquer le thème dès le début
      this.initializeTheme();
    }
  }

  private initializeTheme() {
    // Vérifier le thème dans localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Déterminer le thème initial
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const systemPrefersDark = prefersDarkScheme.matches;

    // Priorité : localStorage > préférence système > défaut (light)
    let isDark = false;
    if (savedTheme === 'dark') {
      isDark = true;
    } else if (savedTheme === 'light') {
      isDark = false;
    } else {
      // Utiliser la préférence système si aucun choix précédent
      isDark = systemPrefersDark;
    }

    // Appliquer le thème
    this.applyTheme(isDark);
    this.isDarkTheme.next(isDark);

    // Écouter les changements de préférence système
    prefersDarkScheme.addListener((e) => {
      if (!localStorage.getItem('theme')) {
        this.applyTheme(e.matches);
        this.isDarkTheme.next(e.matches);
      }
    });
  }

  toggleTheme() {
    const newTheme = !this.isDarkTheme.value;
    this.isDarkTheme.next(newTheme);
    this.applyTheme(newTheme);
    
    if (this.isBrowser) {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    }
  }

  private applyTheme(isDark: boolean) {
    if (this.isBrowser) {
      // Appliquer la classe sur l'élément racine html
      document.documentElement.classList.toggle('dark-theme', isDark);
    }
  }
}