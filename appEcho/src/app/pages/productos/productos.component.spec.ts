
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

  titulo = 'Nuestro catálogo';

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Lenovo IdeaPad',
      categoria: 'Laptops',
      precio: 1899.90,
      stock: 12
    },
    {
      id: 2,
      nombre: 'Mouse Logitech M170',
      categoria: 'Accesorios',
      precio: 49.90,
      stock: 25
    },
    {
      id: 3,
      nombre: 'Teclado mecánico Redragon',
      categoria: 'Accesorios',
      precio: 159.90,
      stock: 0
    },
    {
      id: 4,
      nombre: 'Audífonos JBL Tune 510BT',
      categoria: 'Audio',
      precio: 179.90,
      stock: 8
    },
    {
      id: 5,
      nombre: 'Monitor Samsung 24 pulgadas',
      categoria: 'Monitores',
      precio: 699.90,
      stock: 5
    },
    {
      id: 6,
      nombre: 'Webcam Logitech C920',
      categoria: 'Accesorios',
      precio: 329.90,
      stock: 0
    }
  ];

contarDisponibles(): number {
  return this.productos.filter(producto => producto.stock > 0).length;
}

contarAgotados(): number {
  return this.productos.filter(producto => producto.stock === 0).length;
}


}
