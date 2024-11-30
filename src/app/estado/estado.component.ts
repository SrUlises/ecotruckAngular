import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';



@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css'
})
export class EstadoComponent {
  constructor(private router: Router, private LoginService: LoginService) { }


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

  redirectToRoute() {
    this.router.navigate(['/home']);
  }


  controlarActuador(endpoint: string) {
    this.LoginService.controlarActuador(endpoint).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        alert(response);
      },
      (error) => {
        console.error('Error al comunicarse con el ESP32:', error);
        alert('Error al enviar la instrucción.');
      }
    );
  }


}
