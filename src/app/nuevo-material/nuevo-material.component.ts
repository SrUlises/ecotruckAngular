import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-nuevo-material',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './nuevo-material.component.html',
  styleUrl: './nuevo-material.component.css'
})
export class NuevoMaterialComponent {
  nuevoMaterial = {
    nombre: '',
    descripcion: '',
    nivelLlenado: 0,
  };

  onSubmit() {
    console.log('Nuevo material agregado:', this.nuevoMaterial);
    // Aquí puedes agregar la lógica para guardar el nuevo material
    // Por ejemplo, enviar los datos a un servicio
    this.resetForm();
  }

  resetForm() {
    this.nuevoMaterial = { nombre: '', descripcion: '', nivelLlenado: 0 };
  }
}
