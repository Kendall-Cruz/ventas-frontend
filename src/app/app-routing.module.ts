import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosLosProductosComponent } from './productos/pages/todos-los-productos/todos-los-productos.component';

const routes: Routes = [
  {
    path:'Productos',
    component:TodosLosProductosComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
