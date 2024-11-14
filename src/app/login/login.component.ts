import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }

  // Método que se ejecuta cuando se presiona el botón
  redirectToRoute() {
    this.router.navigate(['/home']); // Redirige a la ruta especificada
  }
}
