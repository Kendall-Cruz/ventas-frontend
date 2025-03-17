import { Component, Input} from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'form-productos',
  templateUrl: './form-productos.component.html',
  styleUrl: './form-productos.component.css',
})

export class FormProductosComponent  {
   //Crea el grupo de controlos de formulario
   control = new FormControl('');
   //Inyecta el servicio
   constructor(private serviceProducto : ProductosService,
               private router : Router
   ){}
   formProducto = new FormGroup({
      nombre : new FormControl('',Validators.required),
      precio : new FormControl('',[Validators.required,Validators.min(1)]),
      proveedor : new FormControl('',Validators.required),
      foto: new FormControl<File | null>(null, Validators.required)
   });

   //Cambia la ruta a u archivo
   ObtenerArchivo(event : Event){

      const data = event.target as HTMLInputElement;
      //Obtiene el arhivo
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
   //Obtiene el id del proveedor
   @Input()
   idProveedor: number=0;
   //Obtiene el nombre del proveedor
   @Input()
   nombreProveedor!: string;

   //Guarda el producto
   public Guardar(){
    //Se utiliza para enviar productos
    const data = new FormData();
      // Agregar los campos del formulario al FormData
      data.append('Nombre', this.formProducto.value.nombre!);
      data.append('Precio', this.formProducto.value.precio!);
      data.append('ProveedorId', this.formProducto.value.proveedor!);
      data.append('Foto', this.formProducto.value.foto!);
      //Envía el producto para guardarlo
      this.serviceProducto.CrearProdcuto(data).subscribe(() => {
         //Redirecciona a la página de inicio
         return this.router.navigateByUrl('');
       })  
   }

   //Borra todos los datos de formulario
   Borrar(){
      this.formProducto.reset();
      this.nombreProveedor ="";
   }
}
