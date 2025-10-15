import { Component, OnInit } from '@angular/core';

// --- Modelo de Datos ---
// Se convierte la interfaz en una clase para poder instanciarla y, opcionalmente, añadirle métodos.
export class Producto {
  constructor(
    public id: number,
    public nombre: string,
    public precio: number,
    public stock: number
  ) {}

  // Aquí podrías añadir métodos en el futuro, por ejemplo:
  // verificarStock(): boolean {
  //   return this.stock > 0;
  // }
}

@Component({
  selector: 'app-lista-producto',
  // NOTA: Para un componente standalone, necesitarías importar CommonModule
  // para poder usar directivas como *ngFor en la plantilla.
  // imports: [CommonModule], 
  templateUrl: './lista-producto.html',
  styleUrl: './lista-producto.scss'
})
export class ListaProducto implements OnInit {

  // --- Propiedades del Componente ---
  // Esta es la variable principal: un array que contendrá todos los objetos de tipo Producto.
  // La inicializamos como un array vacío.
  public productos: Producto[] = [];

  constructor() { }

  // ngOnInit es un "gancho del ciclo de vida" de Angular.
  // Es el lugar ideal para cargar los datos iniciales del componente.
  ngOnInit(): void {
    // Ahora creamos instancias de la clase Producto.
    this.productos = [
      new Producto(1, 'Laptop Gamer', 1200, 15),
      new Producto(2, 'Mouse Inalámbrico', 25, 100),
      new Producto(3, 'Teclado Mecánico RGB', 80, 50),
      new Producto(4, 'Monitor 27" 4K', 350, 22)
    ];
  }

}