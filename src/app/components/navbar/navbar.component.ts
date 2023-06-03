import { Component, ViewChild } from '@angular/core';
import { faX, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('burger') span: any;
  faX = faX;
  faBars = faBars;
  mobileMenuActive: boolean = false;
  logoPath: string = 'assets/wiki-logo.png';

  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}