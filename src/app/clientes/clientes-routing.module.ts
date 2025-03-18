import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './pages/clientes-list/clientes-list.component';
import { FormularioClienteComponent } from './pages/formulario-cliente/formulario-cliente.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClientesListComponent 
  },
  { 
    path: 'nuevo',
    component: FormularioClienteComponent
  },
  { 
    path: 'editar/:id', 
    component: FormularioClienteComponent 
  } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
