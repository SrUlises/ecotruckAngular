import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../servicios/material.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  material = {
    tipoPlastico: '',
    codigoReciclaje: '',
    color: '',
    pesoAprox: '',
    contaminantes: '',
    fechaIngreso: '',
    proveedor: '',
    observaciones: '',


  };

  constructor(private router: Router, private servicioMaterial: MaterialService) { }

  redirectToRoute() {
    this.router.navigate(['/home']); // Redirige a la ruta especificada

  }
  guardarMaterial() {
    this.servicioMaterial.guardarMaterial(this.material).subscribe(
      (res) => {
        alert('Lectura Guardada Con Éxito');
        // Restablece los campos de configuración
        this.material = {
          tipoPlastico: '',
          codigoReciclaje: '',
          color: '',
          pesoAprox: '',
          contaminantes: '',
          fechaIngreso: '',
          proveedor: '',
          observaciones: '',
        };
      },
      (err) => {
        alert('Error Al Guardar La Lectura');
        console.log(err);
      }
    );
  }


}
