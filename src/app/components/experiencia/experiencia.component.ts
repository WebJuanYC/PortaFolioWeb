import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //inicializar variables de instancia 

  experiencia: any = []; //se llama al modelo que es un array


  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private sExperiencia: ExperienciaService
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.sExperiencia.list().subscribe({
      next: (v) => {
        console.log(v);
        this.experiencia = v
      },
      error: (e) => console,
      complete: () => console.info('complete')
    });
  };


}


