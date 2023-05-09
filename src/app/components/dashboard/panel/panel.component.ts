import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  usuarioAuth: boolean= false;
  cerrarsesion: any;
  modoEdit!: boolean;
  

  constructor() { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    sessionStorage.setItem,'currentUser';
    this.modoEdit = false;
    alert("CERRAR SESION");
    }

}
