import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mi-componente-b',
  templateUrl: './mi-componente-b.component.html',
  styleUrls: ['./mi-componente-b.component.css']
})
export class MiComponenteBComponent implements OnInit {
  constructor(private _router:ActivatedRoute){

  }

  items:any[]=['hey!', 'Qué pasa!']
  mensaje:string='';

  ngOnInit():void{
    // this.mensaje = this._router.snapshot.paramMap.get('mensaje') || '';
    this._router.queryParams.subscribe(params => {
      this.mensaje = params['mensaje'] || '';
    });
  }

}
