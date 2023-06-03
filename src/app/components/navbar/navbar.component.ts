import { Component } from '@angular/core';
import { faX, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faX = faX;
  faBars = faBars;
  mobileMenuActive = false;
  logoPath = 'assets/wiki-logo.png';

  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}