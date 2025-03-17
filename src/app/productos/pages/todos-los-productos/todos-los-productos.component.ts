import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto';
@Component({
  selector: 'todos-los-productos',
  templateUrl: './todos-los-productos.component.html',
  styleUrl: './todos-los-productos.component.css'
})
export class TodosLosProductosComponent implements  OnInit {

 constructor(private serviceProducto : ProductosService){}
  //Id del proveedor
  public idProducto : number=0;
  //Muestro el loading
  public cargando = true;
 public productos:Producto[]=[];
  ngOnInit(): void{

      this.serviceProducto.ListarProductos().subscribe((data)=>{
          this.productos = data
          this.cargando = false;
      })
  }

  Eliminar(id :number){
    this.idProducto = id;
  }
  //Elimina el producto
  EliminarProducto(id :number){
    //Yama al servicio para eliminar el producto
    this.serviceProducto.EliminarProdcuto(id)
        .subscribe(()=>{
          //Lista nuevamente todos los productos
          this.serviceProducto.ListarProductos()
            .subscribe((data)=>{
            this.productos = data
        })
      })


  }
}
