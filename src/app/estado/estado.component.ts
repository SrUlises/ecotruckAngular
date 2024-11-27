import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css'
})
export class EstadoComponent {

  porcentaje: number = 18; // Inicializa con un valor de ejemplo (50%)

  setPorcentaje(valor: number): void {
    this.porcentaje = valor;

    if (this.porcentaje < 20) {
      this.alertaPorcentajeBajo();
    }
  }

  alertaPorcentajeBajo(): void {
    alert('¡Alerta! El porcentaje es menor al 20%.');
  }

  constructor(private router: Router) { }

  redirectToRoute() {
    this.router.navigate(['/home']);
  }


}
