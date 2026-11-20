import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NuevoProducto, Producto, ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  private readonly productosService = inject(ProductosService);

  titulo = 'Nuestros arreglos florales';
  productos: Producto[] = [];
  nuevoProducto: NuevoProducto = this.productoVacio();
  cargando = false;
  guardando = false;
  error = '';
  mensaje = '';

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando = true;
    this.error = '';
    this.productosService.listar().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudo cargar el catálogo. Verifica que el backend esté activo.';
        this.cargando = false;
      }
    });
  }

  guardarProducto(): void {
    this.guardando = true;
    this.error = '';
    this.mensaje = '';
    this.productosService.crear(this.nuevoProducto).subscribe({
      next: (producto) => {
        this.productos = [...this.productos, producto];
        this.nuevoProducto = this.productoVacio();
        this.mensaje = 'Producto registrado correctamente.';
        this.guardando = false;
      },
      error: () => {
        this.error = 'No se pudo registrar el producto. Verifica los datos y el backend.';
        this.guardando = false;
      }
    });
  }

  private productoVacio(): NuevoProducto {
    return { nombre: '', categoria: '', precio: 0, stock: 0 };
  }

  contarDisponibles(): number {
    return this.productos.filter(producto => producto.stock > 0).length;
  }

  contarAgotados(): number {
    return this.productos.filter(producto => producto.stock === 0).length;
  }
}