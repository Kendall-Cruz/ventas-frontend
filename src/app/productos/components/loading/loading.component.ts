import { Component, Input } from '@angular/core';

@Component({
  selector: 'Loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

   @Input()
   cargarndo : boolean=true;
}
