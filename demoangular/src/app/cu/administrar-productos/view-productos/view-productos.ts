import { Component } from '@angular/core';
import { ModalProducto, Producto } from '../modal-producto/modal-producto';

@Component({
  selector: 'app-view-productos',
  standalone: true,
  imports: [ModalProducto],
  templateUrl: './view-productos.html',
  styleUrl: './view-productos.css',
})
export class ViewProductos {
  productos: Producto[] = [
    { id: 1, nombre: 'Laptop Pro', precio: 1200, disponible: true },
    { id: 2, nombre: 'Teclado Mecánico', precio: 85, disponible: true },
    { id: 3, nombre: 'Monitor 4K', precio: 350, disponible: false },
    { id: 4, nombre: 'Ratón Ergonómico', precio: 45, disponible: true }
  ];

  mostrarModal = false;
  productoSeleccionado: Producto | null = null;

  editarProducto(producto: Producto): void {
    this.productoSeleccionado = { ...producto };
    this.mostrarModal = true;
  }

  guardarProducto(productoActualizado: Producto): void {
    this.productos = this.productos.map((producto) =>
      producto.id === productoActualizado.id ? productoActualizado : producto
    );
    this.cerrarModal();
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.productoSeleccionado = null;
  }
}