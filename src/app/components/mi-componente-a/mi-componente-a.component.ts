import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-componente-a',
  templateUrl: './mi-componente-a.component.html',
  styleUrls: ['./mi-componente-a.component.css']
})
export class MiComponenteAComponent {

  constructor(private _router:Router){

  }
  enviarFormulario(mensaje:string){
    this._router.navigate(['/componente-b',{mensaje:mensaje}]); //{ queryParams: { mensaje: mensaje } }
  }

}
