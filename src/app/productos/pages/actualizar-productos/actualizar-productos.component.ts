import { Component } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'actualizar-productos',
  templateUrl: './actualizar-productos.component.html',
  styleUrl: './actualizar-productos.component.css'
})
export class ActualizarProductosComponent {

  public idProveedor:number=0;
  public nombreProveedor:string="";
    ObtenerProveedor( proveedor:Proveedor){
      this.idProveedor = proveedor.id;
      this.nombreProveedor =proveedor.nombreCompleto;
    }
    //Obtiene todos los productos
     public proveedores : Proveedor[]=[];
      //Inyección de dependencias
      constructor(private serviceProveedor : ProveedorService){}

      ngOnInit(): void {
          
        this.serviceProveedor.ListarProveedores().subscribe((data)=>{
            //Carga todos los proveedores
            this.proveedores = data
        })
      }
}
