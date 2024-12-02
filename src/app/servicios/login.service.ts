import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // Correcta importación de throwError
import { catchError } from 'rxjs/operators'; // Importación de catchError

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private expressUrl = 'http://localhost:3000'; // URL base del servidor Express

  constructor(private http: HttpClient) { }

  // Método para iniciar sesión
  login(name: string, password: string): Observable<any> {
    return this.http.post(`${this.expressUrl}/users/login`, { name, password })
      .pipe(
        catchError(this.handleError)  // Captura de errores
      );
  }

  // Método para obtener información del usuario
  getUserInfo(name: string): Observable<any> {
    return this.http.get(`${this.expressUrl}/users/user/${name}`);
  }

  // Método para controlar el actuador del ESP32 mediante POST
  controlarActuador(state: string): Observable<any> {
    return this.http.post(`${this.expressUrl}/api/control-led`, { state });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  // Manejo de errores global para el servicio
  private handleError(error: any) {
    let errorMessage = '';
    if (error.status === 403) {
      // Si el error es un 403, significa que la cuenta está desactivada
      errorMessage = 'Tu cuenta está desactivada. No puedes iniciar sesión.';
    } else if (error.status === 404) {
      errorMessage = 'Usuario no encontrado';
    } else if (error.status === 401) {
      errorMessage = 'Contraseña incorrecta';
    } else {
      errorMessage = 'Error inesperado. Intenta nuevamente.';
    }

    // Lanzamos el error usando throwError correctamente
    return throwError(() => new Error(errorMessage));  // Usamos throwError con una función
  }
}
