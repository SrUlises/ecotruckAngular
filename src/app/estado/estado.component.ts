import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css'
})
export class EstadoComponent {
  constructor(private router: Router) { }

  redirectToRoute() {
    this.router.navigate(['/home']);
  }
}
