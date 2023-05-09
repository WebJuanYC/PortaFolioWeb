import { Component, OnInit } from '@angular/core';
import { ReferenciaService } from '../servicios/referencia.service';

@Component({
  selector: 'app-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.css']
})
export class ReferenciaComponent implements OnInit {
  referencia: any = []; //se llama al modelo que es un array

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private sReferencia: ReferenciaService
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.sReferencia.list().subscribe({
      next: (v) => {
        console.log(v);
        this.referencia = v
      },
      error: (e) => console,
      complete: () => console.info('complete')
    });
  };


}
