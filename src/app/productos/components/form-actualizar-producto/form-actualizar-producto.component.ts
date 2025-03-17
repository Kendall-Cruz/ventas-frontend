import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import {switchMap } from 'rxjs';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'form-actualizar-producto',
  templateUrl: './form-actualizar-producto.component.html',
  styleUrl: './form-actualizar-producto.component.css'
})
export class FormActualizarProductoComponent implements OnInit {
  //Obtiene el id del proveedor
  @Input()
  idProveedor: number=0;
 //Obtiene el nombre del proveedor
  @Input()
  nombreProveedor!: string;
  
  ngOnInit(): void {
    //Obtiene el id del producto de la ruta
    this.activatedRoute.params.pipe(
      //Obtiene el producto que tenga el id de la ruta
      switchMap(({ id }) => this.serviceProducto.ObtenerProducto(id))
    ).subscribe((data) => {
      //Agrega todos los datos del producto al formulario
      this.formProducto.patchValue({
        id : `${data.id}`,
        nombre : `${data.nombre}`,
        precio : `${data.precio}`,
        proveedor : `${data.proveedorId}`
      })
      this.nombreProveedor = data.nombreProveedor;
    })
  }

   //Inyecta el servicio
   constructor(private serviceProducto : ProductosService, 
                private activatedRoute : ActivatedRoute,
                private router : Router
   ){}
   
  //Crea el grupo de controlos de formulario
   formProducto = new FormGroup({
      id : new FormControl('',Validators.required),
      nombre : new FormControl('',[Validators.required,Validators.maxLength(50)]),
      precio : new FormControl('',Validators.min(1)),
      proveedor : new FormControl('',Validators.required),
      foto: new FormControl<File | null>(null, Validators.required)
   });

   //Cambia la ruta de la imagen por un archivo
   ObtenerArchivo(event : Event){
      //Otiene el input de la imagen
      const data = event.target as HTMLInputElement;
      //Obtiene la imagen
      const imagen: FileList | null = data.files;
      //Valida que no sea nulo
      if(imagen!=null){
         //Itera la lista de archivos
         Array.prototype.forEach.call(imagen,(file:File)=>{
            //Agrega la imagen
            this.formProducto.patchValue({
               foto: file 
             });
         })
      }
   }
   //Borra todos los datos de formulario
   Borrar(){
    this.formProducto.reset();
    this.nombreProveedor = "";
   }

   //Guarda el producto
   public Actualizar(){
    //Se utiliza para enviar productos
    const data = new FormData();
      // Agregar los campos del formulario al FormData
      data.append('Id', this.formProducto.value.id!);
      data.append('Nombre', this.formProducto.value.nombre!);
      data.append('Precio', this.formProducto.value.precio!);
      data.append('ProveedorId', this.formProducto.value.proveedor!);
      data.append('Foto', this.formProducto.value.foto!);
      //Convierte el id del producto a un número
      const id = Number(this.formProducto.value.id)
      //Envía el producto para actualizarlo
      this.serviceProducto.ActualizarProdcuto(data,id)
      .subscribe(() => {
        //Redirecciona a la página de inicio
        return this.router.navigateByUrl('');
      })  
   }
}
