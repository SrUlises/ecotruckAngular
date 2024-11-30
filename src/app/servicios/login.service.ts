import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/users';
  private urlesp32 = "http://192.168.1.122";


  constructor(private http: HttpClient) { }

  login(name: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/login`, { name, password });
  }


  // Método para obtener información del usuario
  getUserInfo(name: string): Observable<any> {
    return this.http.get(`${this.url}/user/${name}`);
  }

  controlarActuador(endpoint: string): Observable<any> {
    return this.http.get(`${this.urlesp32}${endpoint}`);
  }
}

