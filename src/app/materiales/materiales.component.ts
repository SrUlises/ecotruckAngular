import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-materiales',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './materiales.component.html',
  styleUrl: './materiales.component.css'
})
export class MaterialesComponent {

  // Definir los materiales con sus niveles de llenado
  materiales = [
    { nombre: 'Tereftalato de polietileno', nivelLlenado: 30 },
    { nombre: 'Polietileno de alta densidad', nivelLlenado: 60 },
    { nombre: 'Policloruro de vinilo', nivelLlenado: 80 },
    { nombre: 'Polietileno de baja densidad', nivelLlenado: 80 },
    { nombre: 'Polipropileno', nivelLlenado: 80 },
    { nombre: 'Polistireno', nivelLlenado: 80 }
  ];

  // Material seleccionado para mostrar
  materialSeleccionado: { nombre: string; nivelLlenado: number } | null = null;

  // Función para seleccionar el material y su nivel de llenado
  seleccionarMaterial(material: { nombre: string; nivelLlenado: number }) {
    this.materialSeleccionado = material;
  }

}
