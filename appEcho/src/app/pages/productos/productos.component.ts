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
    { id: 6, nombre: 'Arreglo de flores mixtas', categoria: 'Variadas', precio: 55, stock: 0 }
  ];

  contarDisponibles(): number {
    return this.productos.filter(producto => producto.stock > 0).length;
  }

  contarAgotados(): number {
    return this.productos.filter(producto => producto.stock === 0).length;
  }
}