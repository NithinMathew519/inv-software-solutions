import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // Close mobile menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const navContainer = target.closest('.nav-container');

    // If click is outside nav container and menu is open, close it
    if (!navContainer && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  // Prevent menu from closing when clicking inside nav container
  onNavContainerClick(event: Event) {
    // Only prevent if clicking on nav-toggle or nav-menu
    const target = event.target as HTMLElement;
    if (target.closest('.nav-toggle') || target.closest('.nav-menu')) {
      event.stopPropagation();
    }
  }
}
