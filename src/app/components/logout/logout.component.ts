import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  modoEdit: Boolean = false;
  persona: any;
  personaService: any;


  constructor(private autenticacionService:AutenticacionService, private ruta:Router) { }

  ngOnInit(): void {
    this.personaService.verPersonas().subscribe((data: any)  =>{
      this.persona = data
    });
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    
  }else {
    //console.log("Login con éxito!");
    this.modoEdit = true;
  }
 }

 cerrarSesion(){
  sessionStorage.setItem('currentUser', "null");
  this.modoEdit = false;
  alert("SESIÓN CERRADA");
  window.location.reload();
  return this.modoEdit;
  
  }

}
