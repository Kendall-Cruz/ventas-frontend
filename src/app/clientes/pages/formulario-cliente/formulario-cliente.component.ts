import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.css'
})
export class FormularioClienteComponent implements OnInit {
  clienteForm!: FormGroup;
  clienteId!: number | null; // Esta variable es para guardar el id en caso de que se esté editando
  title = 'Agregar cliente';

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router, // Para navegar entre rutas
    private route: ActivatedRoute // Para obtener parámetros de la URL
  ) {}

  ngOnInit(): void {
    this.initForm();

    // Tomar el ID del cliente en caso de edición
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) { 
        this.clienteId = parseInt(id); 
        this.title = 'Editar cliente';
        this.loadCliente(this.clienteId); //Carga el cliente
      } else {
        this.clienteId = null;  
      }
    });
  }

  // Inicializar el formulario
  initForm(): void {
    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required , Validators.maxLength(30)]],
      apellido: ['', [Validators.required, Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email , Validators.maxLength(50)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]]
    });
  }

  // Carga los datos del cliente en caso de edición
  loadCliente(id: number): void {
    this.clienteService.getCliente(id).subscribe(cliente => {
      if (cliente) {
        this.clienteForm.patchValue(cliente);
      }
    });
  }

  // Enviar formulario
  guardarCliente(): void {
    if (this.clienteForm.invalid) {
      alert('Formulario inválido');
      return;
    }

    
    const formData = new FormData();
    formData.append('nombre', this.clienteForm.get('nombre')?.value);
    formData.append('apellido', this.clienteForm.get('apellido')?.value);
    formData.append('email', this.clienteForm.get('email')?.value);
    formData.append('telefono', this.clienteForm.get('telefono')?.value);

    if (this.clienteId !== null) {
      // Actualizar cliente
      this.clienteService.updateCliente(this.clienteId, formData).subscribe(() => {
        this.router.navigate(['/clientes']);
      });
    } else {
      // Agregar nuevo cliente
      this.clienteService.addCliente(this.clienteForm.value).subscribe(() => {
        this.router.navigate(['/clientes']);
      });
      
    }
  }
  

}
