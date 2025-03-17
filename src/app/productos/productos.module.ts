import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ListaProveedoresComponent } from './components/lista-proveedores/lista-proveedores.component';
import { TodosLosProductosComponent } from './pages/todos-los-productos/todos-los-productos.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormActualizarProductoComponent } from './components/form-actualizar-producto/form-actualizar-producto.component';
import { ActualizarProductosComponent } from './pages/actualizar-productos/actualizar-productos.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    FormProductosComponent,
    ListaProductosComponent,
    ListaProveedoresComponent,
    TodosLosProductosComponent,
    CrearProductoComponent,
    FormActualizarProductoComponent,
    ActualizarProductosComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule 
  ]
})
export class ProductosModule { }
