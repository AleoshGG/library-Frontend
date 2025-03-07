import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(private router: Router) {}

  goTo(option: number) {
    switch (option) {
      case 1:
        this.router.navigate(['/']);
        break;
      case 2:
        this.router.navigate(['/loans']);
        break;
      case 3:
        this.router.navigate(['/returns']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
}
