import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private expressUrl = 'http://localhost:3000'; // URL base del servidor Express

  constructor(private http: HttpClient) { }

  // Método para iniciar sesión
  login(name: string, password: string): Observable<any> {
    return this.http.post(`${this.expressUrl}/users/login`, { name, password });
  }

  // Método para obtener información del usuario
  getUserInfo(name: string): Observable<any> {
    return this.http.get(`${this.expressUrl}/users/user/${name}`);
  }

  // Método para controlar el actuador del ESP32 mediante POST
  controlarActuador(state: string): Observable<any> {
    return this.http.post(`${this.expressUrl}/api/control-led`, { state });
  }
}
