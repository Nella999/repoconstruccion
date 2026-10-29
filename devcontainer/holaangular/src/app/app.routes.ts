import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
    { path: 'inicio', component: Inicio, title:'Componente Inicio' },
    { path: 'contacto', component: Contacto, title:'Componente Contacto' }
];