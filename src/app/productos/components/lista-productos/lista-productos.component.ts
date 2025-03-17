import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Producto } from '../../interfaces/producto';


@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  //Carga todos los productos
  @Input()
  public productos:Producto[]=[];

  @Output()
    eliminar = new EventEmitter<number>();
  //
  Eliminar(id :number){
    this.eliminar.emit(id);
  }

}
