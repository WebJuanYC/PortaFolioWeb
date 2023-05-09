import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer: any;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  ) { }

  ngOnInit(): void {
     //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
  }

}
