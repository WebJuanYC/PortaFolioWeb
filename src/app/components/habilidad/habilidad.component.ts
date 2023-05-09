import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../entidades/habilidad';
import { HabilidadService } from '../servicios/habilidad.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
 //inicializar variables de instancia 

habilidad: any=[]; //se llama al modelo que es un array
  

  constructor(
     //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private sHabilidad:HabilidadService) { }


  ngOnInit(): void {
      //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
      this.sHabilidad.list().subscribe({
        next: (v) => { 
          console.log(v);
          this.habilidad=v},
        error: (e) => console,
        complete: () => console.info('complete') 
    });
   };

}
