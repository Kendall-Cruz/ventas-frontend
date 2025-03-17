import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { ClienteDTO } from '../interfaces/clienteDTO.interface';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL_API = 'https://localhost:7221/api';

  constructor(private http: HttpClient) { }

  // Obtener todos los clientes
  getClientes(): Observable<ClienteDTO[]> {
    const url = `${this.URL_API}/clientes`;

    return this.http.get<ClienteDTO[]>(url).pipe(
      map((clientes) =>
        clientes.map((item) => ({
          id: item.id,
          nombreCompleto: item.nombreCompleto,
          email: item.email,
          telefono: item.telefono,
        }))
      ),
      catchError((error) => {
        console.error('Error obteniendo clientes:', error);
        return of([]);
      })
    );
  }

  // Obtener un clienteDTO por ID
  getClienteDTO(id: number): Observable<ClienteDTO | null> {
    const url = `${this.URL_API}/clientes/${id}`;

    return this.http.get<ClienteDTO>(url).pipe(
      map((cliente) => ({
        id: cliente.id,
        nombreCompleto: cliente.nombreCompleto,
        email: cliente.email,
        telefono: cliente.telefono,
      })),
      catchError((error) => {
        console.error('Error obteniendo cliente:', error);
        return of(null);
      })
    );
  }

    // Obtener un cliente por ID
    getCliente(id: number): Observable<Cliente | null> {
      const url = `${this.URL_API}/clientes/${id}`;
  
      return this.http.get<Cliente>(url).pipe(
        map((cliente) => ({
          id: cliente.id,
          nombre: cliente.nombre,
          apellido: cliente.apellido,
          email: cliente.email,
          telefono: cliente.telefono,
        })),
        catchError((error) => {
          console.error('Error obteniendo cliente:', error);
          return of(null);
        })
      );
    }
  

  // Agregar un nuevo cliente
  addCliente(cliente: Cliente): Observable<Cliente> {
    const formData = new FormData();
    formData.append('nombre', cliente.nombre);
    formData.append('apellido', cliente.apellido);
    formData.append('telefono', cliente.telefono);
    formData.append('email', cliente.email  || 'No registra');
    
  
    return this.http.post<Cliente>(`${this.URL_API}/clientes`, formData).pipe(
      catchError((error) => {
        console.error('Error agregando cliente:', error.error.errors);
        return throwError(() => new Error(error.message));
      })
    );
  }
  

  // Eliminar un cliente
  deleteCliente(id: number): Observable<any> {
    return this.http.delete(`${this.URL_API}/clientes/${id}`).pipe(
      catchError((error) => {
        console.error('Error eliminando cliente:', error);
        return of(null);
      })
    );
  }

  // Actualizar un cliente
  updateCliente(clienteId: number, formData: FormData): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.URL_API}/clientes/${clienteId}`, formData).pipe(
      catchError((error) => {
        console.error('Error actualizando cliente:', error);
        return of(null as any);
      })
    );
  }
  
}
