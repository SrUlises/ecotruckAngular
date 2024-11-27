import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usuario: { username: string; puesto: string } = { username: '', puesto: '' }; // Modelo básico para el usuario


  constructor(private router: Router, private LoginService: LoginService) { }

  agregar() {
    this.router.navigate(['/agregar']); // Redirige a la ruta especificada
  };
  estado() {
    this.router.navigate(['/estado']);

  };
  ngOnInit(): void {
    this.LoginService.getUsuarios().subscribe({
      next: (data) => {
        // Asumimos que el API devuelve un arreglo, tomamos el primer usuario como ejemplo
        if (data.length > 0) {
          this.usuario.username = data[0].username; // Obtener el username del primer usuario
          this.usuario.puesto = 'operador'; // Agregar un dato fijo o dinámico según tu API
        }
      },
      error: (error) => {
        console.error('Error al obtener los usuarios:', error);
      },
    });
  }
}



