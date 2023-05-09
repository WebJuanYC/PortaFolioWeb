import { Component, OnInit } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactoService } from '../servicios/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contacto: any=[]; //se llama al modelo que es un array
  constructor(
     //Inyectar el Servicio para tener acceso en la clase a los Métodos
     private sContacto:ContactoService) { }
  

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.sContacto.list().subscribe({
      next: (v) => { 
        console.log(v);
        this.contacto=v},
      error: (e) => console,
      complete: () => console.info('complete') 
  });
        };

}
