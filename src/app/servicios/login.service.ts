import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/users';


  constructor(private http: HttpClient) { }

  verificarCredenciales(username: String, password: String): Observable<any> {
    return this.http.post(`${this.url}/login`, { username, password });

  }
}
