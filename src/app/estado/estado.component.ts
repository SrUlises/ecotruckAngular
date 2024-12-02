import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent {
  porcentaje: number = 18; // Valor inicial del porcentaje de llenado

  constructor(private router: Router, private loginService: LoginService) { }

  // Método para redirigir a la ruta "Home"
  redirectToRoute(): void {
    this.router.navigate(['/home']);
  }

  // Método para controlar el LED
  controlarActuador(state: string): void {
    this.loginService.controlarActuador(state).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        alert(`Respuesta: ${response.message}`);
      },
      (error) => {
        console.error('Error al comunicarse con el servidor:', error);
        alert('Error al enviar la instrucción.');
      }
    );
  }
}
