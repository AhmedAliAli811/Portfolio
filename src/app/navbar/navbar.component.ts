import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false; // Tracks whether the mobile menu is open or closed

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Toggles the menu state
  }
}
