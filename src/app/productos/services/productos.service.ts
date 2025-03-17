import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError,Observable,of } from 'rxjs';
import { Producto } from '../interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private URL_API: string = "https://localhost:7221/api";
  //Inyección de dependencia 
  constructor(private http:HttpClient) { }
  //Lista todos los productos
  public ListarProductos():Observable<Producto[]>{
    const URL = `${this.URL_API}/productos`;
    return this.http.get<Producto[]>(URL);
  }

  //Obtiene un solo producto
  public ObtenerProducto(id:number):Observable<Producto>{
    const URL = `${this.URL_API}/productos/${id}`;
    //Se utiliza en caso de error
    const producto : Producto = {
      id : -1,
      nombre : "",
      precio : -1,
      nombreProveedor:"",
      foto:"",
      proveedorId:-1
    }

    return this.http.get<Producto>(URL).pipe(
        catchError((error)=> of(producto))
      )
  }

  //Crea un producto nuevo
  public CrearProdcuto(data:FormData):Observable<any>{
    //El FormData se utiliza para enviar los datos a la API
    const URL = `${this.URL_API}/productos`;
    console.log(URL)
    return this.http.post(URL,data);
  }

  //Crea un producto nuevo
  public EliminarProdcuto(id:number):Observable<any>{
    //El FormData se utiliza para enviar los datos a la API
    const URL = `${this.URL_API}/productos/${id}`;
    return this.http.delete(URL);
  }
  //Actualiza un producto
  public  ActualizarProdcuto(data :FormData, id:number){
    const URL = `${this.URL_API}/productos/${id}`;
    return this.http.put(URL,data);
  }
}
