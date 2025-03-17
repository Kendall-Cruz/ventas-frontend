import { Component,OnInit } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor';
import { ProveedorService } from '../../services/proveedor.service';
@Component({
  selector: 'crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent implements OnInit {
  //Id del proveedor
  public idProveedor:number=0;
  //Nombre del proveedor
  public nombreProveedor:string="";
  public proveedores : Proveedor[]=[];
  //Inyección de dependencias
  constructor(private serviceProveedor : ProveedorService){}
  ngOnInit(): void {

    this.serviceProveedor.ListarProveedores().subscribe((data)=>{
      //Lista todos los proveedores
      this.proveedores = data
  })
  }
 
  //Obtieen los datos del proveedor
  ObtenerProveedor( proveedor:Proveedor){
    this.idProveedor = proveedor.id;
    this.nombreProveedor =proveedor.nombreCompleto;
  }
}
