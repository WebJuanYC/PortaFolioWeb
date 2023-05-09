import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  error: any;


  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  ) { }

  ngOnInit(): void {
      //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
  }

}
