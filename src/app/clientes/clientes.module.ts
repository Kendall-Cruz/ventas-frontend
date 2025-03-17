import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { FormularioClienteComponent } from './pages/formulario-cliente/formulario-cliente.component';
import { ClientesListComponent } from './pages/clientes-list/clientes-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioClienteComponent,
    ClientesListComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ClientesListComponent
  ]
})
export class ClientesModule { }
