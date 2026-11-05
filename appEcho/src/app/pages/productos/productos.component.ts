import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  titulo = 'Nuestros arreglos florales';

  productos: Producto[] = [
    { id: 1, nombre: 'Ramo de rosas rojas', categoria: 'Rosas', precio: 45, stock: 10 },
    { id: 2, nombre: 'Ramo de girasoles', categoria: 'Girasoles', precio: 35, stock: 8 },
    { id: 3, nombre: 'Arreglo de tulipanes', categoria: 'Tulipanes', precio: 60, stock: 5 },
    { id: 4, nombre: 'Ramo de margaritas', categoria: 'Margaritas', precio: 30, stock: 0 },
    { id: 5, nombre: 'Caja de rosas', categoria: 'Rosas', precio: 75, stock: 4 },
    { id: 6, nombre: 'Arreglo de flores mixtas', categoria: 'Variadas', precio: 55, stock: 0 },
    { id: 7, nombre: 'Bouquet de lirios', categoria: 'Lirios', precio: 52, stock: 7 },
    { id: 8, nombre: 'Arreglo de orquídeas', categoria: 'Orquídeas', precio: 90, stock: 3 },
    { id: 9, nombre: 'Ramo de peonías', categoria: 'Peonías', precio: 68, stock: 0 },
    { id: 10, nombre: 'Caja de tulipanes', categoria: 'Tulipanes', precio: 58, stock: 6 },
    { id: 11, nombre: 'Arreglo premium', categoria: 'Premium', precio: 120, stock: 2 },
    { id: 12, nombre: 'Ramo de flores silvestres', categoria: 'Variadas', precio: 40, stock: 9 }
  ];

  contarDisponibles(): number {
    return this.productos.filter(producto => producto.stock > 0).length;
  }

  contarAgotados(): number {
    return this.productos.filter(producto => producto.stock === 0).length;
  }
}