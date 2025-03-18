import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDTO } from '../../interfaces/clienteDTO.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent {
  
  clientes: ClienteDTO[] = [];
  constructor(private clienteService:ClienteService , private router:Router) { }

  ngOnInit(): void {
    // Obtener los clientes
    this.clienteService.getClientes().subscribe(clientesApi => {
      this.clientes = clientesApi;
    });
  }

  deleteCliente(id: number): void {
    console.log('Eliminar cliente con ID:', id); 
    this.clienteService.deleteCliente(id).subscribe(() => { // Llamar al servicio para eliminar el cliente
      window.location.reload(); // Recargar la página
    });
  }


}
