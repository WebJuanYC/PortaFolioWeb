import { Component, OnInit } from '@angular/core';
import { RedService } from '../servicios/red.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  red: any = [];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private sRed: RedService,
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.sRed.list().subscribe({
      next: (v) => {
        console.log(v);
        this.red = v
      },
      error: (e) => console,
      complete: () => console.info('complete')
    });
  }


}
