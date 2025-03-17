import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError,map,Observable,of } from 'rxjs';
import { Proveedor } from '../interfaces/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private URL_API: string = "https://localhost:7221/api";
  constructor(private http:HttpClient) { }
  //Lista todos los proveedores
   public ListarProveedores():Observable<Proveedor[]>{
      const URL = `${this.URL_API}/proveedor`;
      return this.http.get<Proveedor[]>(URL).pipe(
        map((proveedores) =>
          proveedores.map((item)=>({
            id : item.id,
            nombreCompleto : item.nombreCompleto,
            telefono : item.telefono,
            email : item.email,
            productos : []
          }))
        ),
        catchError((error)=> of([]))
      );
    }
    
    //Obtiene un proveedor
    public ObtenerProveedore(id:number):Observable<Proveedor>{
      const URL = `${this.URL_API}/proveedor/${id}`;
      return this.http.get<Proveedor>(URL);
    }
}
