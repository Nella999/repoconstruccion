
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  nombreTienda = 'TechStore';

  descripcion = 'Encuentra la tecnología que necesitas para estudiar, trabajar y disfrutar.';

}
