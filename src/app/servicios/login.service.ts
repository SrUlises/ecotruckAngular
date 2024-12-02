import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private expressUrl = 'http://localhost:3000'; // URL base del servidor Express

  private token: string | null = null; // Token para autenticación

  constructor(private http: HttpClient) { }

  // Método para iniciar sesión y guardar el token
  login(name: string, password: string): Observable<any> {
    return new Observable((observer) => {
      this.http.post(`${this.expressUrl}/users/login`, { name, password }).subscribe(
        (response: any) => {
          if (response.token) {
            this.token = response.token; // Almacena el token
            observer.next(response);
            observer.complete();
          } else {
            observer.error('No se recibió un token válido.');
          }
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  // Método para obtener el token actual
  getToken(): string | null {
    return this.token;
  }

  // Método para cerrar sesión
  logout(): void {
    this.token = null;
  }

  // Método para obtener información del usuario
  getUserInfo(name: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.expressUrl}/users/user/${name}`, { headers });
  }

  // Método para controlar el actuador del ESP32 mediante POST
  controlarActuador(state: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.expressUrl}/api/control-led`, { state }, { headers });
  }

  // Método para configurar encabezados de autorización
  private getAuthHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return headers;
  }
}
