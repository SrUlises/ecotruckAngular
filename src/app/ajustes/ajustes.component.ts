import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajustes',
  standalone: true,
  imports: [ ],
  templateUrl: './ajustes.component.html',
  styleUrl: './ajustes.component.css'
})
export class AjustesComponent {

  userInfo: any = {};  // Inicializar como objeto vacío

  constructor (
    private router: Router,
    private LoginService: LoginService
  ) { }

  ngOnInit(): void {
    const name = localStorage.getItem('username');

    if (name) {
      this.LoginService.getUserInfo(name).subscribe({
        next: (data) => {
          console.log('Datos del usuario recibidos:', data);  // Verifica la respuesta
          this.userInfo = data.user;  // Asigna los datos del usuario si están disponibles

        },
        error: (err) => {
          console.error('Error al obtener la información del usuario:', err);
        }
      });
    } else {
      console.error('No se encontró el nombre de usuario en localStorage.');
      this.router.navigate(['/login']);  // Redirige al login si no hay usuario
    }
  }

  inicio() {
    this.router.navigate(['/home']);
  }
}
