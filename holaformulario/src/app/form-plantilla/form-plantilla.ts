
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-plantilla',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-plantilla.html',
  styleUrl: './form-plantilla.css',
})
export class FormPlantilla {

  registros: any[] = []; //para arreglos 
  floresSeleccionadas: string[] = [];

toggleFlor(flor: string, event: Event) {
  const marcado = (event.target as HTMLInputElement).checked;

  if (marcado) {
    this.floresSeleccionadas.push(flor);
  } else {
    this.floresSeleccionadas =
      this.floresSeleccionadas.filter(f => f !== flor);
  }
}

  onSubmit(form: NgForm) {

  if (form.valid && this.floresSeleccionadas.length > 0) {

    this.registros.push({
      ...form.value,
      flores: [...this.floresSeleccionadas]
    });
    this.floresSeleccionadas = [];
    form.resetForm();
  }

}

}
