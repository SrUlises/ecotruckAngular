import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private url = 'http://localhost:3000/materiales';


  constructor(private http: HttpClient) { }

  guardarMaterial(material: object) {

    return this.http.post<any>(this.url, material);
  }

}
