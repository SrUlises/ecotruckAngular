import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/users';


  constructor(private http: HttpClient) { }

  login(name: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/login`, { name, password });
  }


  // Método para obtener los nombres de los usuarios
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/usuarios");
  }
}
