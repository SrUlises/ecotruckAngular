import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  constructor(private router: Router) { }

  redirectToRoute() {
    this.router.navigate(['/home']); // Redirige a la ruta especificada
  }
}


