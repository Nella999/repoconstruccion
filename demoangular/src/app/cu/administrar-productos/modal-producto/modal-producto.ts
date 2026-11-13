import { Component, OnInit, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-modal-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-producto.html',
  styleUrl: './modal-producto.css',
})
export class ModalProducto implements OnInit {
  producto = input.required<Producto>();
  cerrar = output<void>();
  guardar = output<Producto>();
  nombre = '';
  precio = 0;
  disponible = false;

  ngOnInit(): void {
    const producto = this.producto();
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.disponible = producto.disponible;
  }

  onGuardar(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const productoActualizado: Producto = {
      ...this.producto(),
      nombre: this.nombre,
      precio: this.precio,
      disponible: this.disponible
    };

    console.log('Datos guardados:', productoActualizado);
    this.guardar.emit(productoActualizado);
  }
}