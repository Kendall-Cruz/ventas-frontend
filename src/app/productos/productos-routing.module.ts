import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { TodosLosProductosComponent } from './pages/todos-los-productos/todos-los-productos.component';
import { ActualizarProductosComponent } from './pages/actualizar-productos/actualizar-productos.component';

const routes: Routes = [
  { path: '', 
    component: TodosLosProductosComponent },
  {
    path:'Crear',
    component:CrearProductoComponent
  },
  {
    path:'Actualizar/:id',
    component:ActualizarProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
