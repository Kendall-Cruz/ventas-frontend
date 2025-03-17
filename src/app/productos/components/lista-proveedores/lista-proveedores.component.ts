import { Component,EventEmitter,Input, Output, viewChild} from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor';
import { ProveedorService} from '../../services/proveedor.service';

@Component({
  selector: 'lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrl: './lista-proveedores.component.css'
})
export class ListaProveedoresComponent  {
  @Input()
  public proveedores : Proveedor[]=[];

  @Output() Proveedor = new EventEmitter<Proveedor>();
  
  public ObtenerProveedor(proveedor :Proveedor){
    this.Proveedor.emit(proveedor)
  }
}
