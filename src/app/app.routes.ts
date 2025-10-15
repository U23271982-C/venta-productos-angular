import { Routes } from '@angular/router';
// 1. Importa tu componente
import { ListaProducto } from './Componentes/lista-producto/lista-producto';

import { CommonModule } from '@angular/common';

export const routes: Routes = [
    // 2. Añade un objeto de ruta al array
    { 
      path: 'productos', // La URL que quieres usar (ej: http://localhost:4200/productos)
      component: ListaProducto // El componente que se cargará en esa ruta
    },
    // Puedes añadir una ruta por defecto para que redirija a 'productos'
    { 
      path: '', 
      redirectTo: '/productos', 
      pathMatch: 'full' 
    }
];