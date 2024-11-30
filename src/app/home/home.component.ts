import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userInfo: any;

  constructor(private router: Router, private LoginService: LoginService) { }

  agregar() {
    this.router.navigate(['/agregar']); // Redirige a la ruta especificada
  }

  estado() {
    this.router.navigate(['/estado']);
  }

  ngOnInit(): void {
    // Recupera el nombre de usuario guardado en localStorage
    const name = localStorage.getItem('username');

    if (name) {
      // Hace la solicitud para obtener los datos del usuario
      this.LoginService.getUserInfo(name).subscribe({
        next: (data) => {
          this.userInfo = data.user; // Información del usuario
        },
        error: (err) => {
          console.error('Error al obtener la información del usuario:', err);
        }
      });
    } else {
      console.error('No se encontró el nombre de usuario en localStorage.');
      this.router.navigate(['/login']); // Redirige al login si no hay usuario
    }
  }
}
