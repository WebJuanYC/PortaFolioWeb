import { Component, OnInit } from '@angular/core';
import { Persona } from '../entidades/persona';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  persona: any=[]; //se llama al modelo que es un array
  item: Persona[]=[];
   PersonaService: any;
   Persona = new Persona("", "", "", "", "", "", "", "");
 

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private sPersona:PersonaService
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.sPersona.list().subscribe({
      next: (v) => { 
        console.log(v);
        this.persona=v},
      error: (e) => console,
      complete: () => console.info('complete') 
  });
     //DEFINIR INFORMACION A MOSTRAR
        };

}
