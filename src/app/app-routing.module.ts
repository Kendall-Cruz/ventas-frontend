import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosLosProductosComponent } from './productos/pages/todos-los-productos/todos-los-productos.component';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesListComponent } from './clientes/pages/clientes-list/clientes-list.component';

const routes: Routes = [
  {
    path:'Productos',
    component:TodosLosProductosComponent 
  },
  {
    path:'clientes',
    component: ClientesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
