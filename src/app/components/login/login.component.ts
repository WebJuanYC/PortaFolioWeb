import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from '@angular/router';
import { Persona } from '../entidades/persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email = '';
  password = '';
  

  persona: Persona = new Persona("", "", "", "", "", "","","");
  get: any;

   //Inyectar en el constructor el formBuilder
   constructor(private formBuilder: FormBuilder, private autenticarService: AutenticacionService, private ruta: Router) {
    //Creamos el grupo de controles para el formulario de login
    this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', "");
  }

  get Mail(){
    return this.form.get("email");
  }

  get MailInvalido(){
    return this.Mail?.errors && this.Mail?.touched;
  }

  get MailValido(){
    return !this.Mail?.errors && this.Mail?.touched;
  }

   get Password(){
    return this.form.get("password");
  }

  get PasswordInvalido(){
    return this.Password?.errors && this.Password?.touched;
  }

  get PasswordValido(){
    return !this.Password?.errors && this.Password?.touched;
  }
  
  limpiar() {
    console.log("Se limpió el formulario")
    this.form.reset();
    this.ruta.navigate(['']);
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      console.log(JSON.stringify(this.form.value));
      this.autenticarService.login(this.form.value).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data.id));
        if (data.id) {
          alert("Puedes editar el portfolio");
          this.ruta.navigate(['dashboard']);
        } else {
          alert("Error al iniciar sesión, credenciales no válidas!!!");
        }
      }, error => {
        alert("ERROR!!!");
      })
    } else {
      sessionStorage.setItem('currentUser', "");
      alert("Error! No tienes acceso");
      this.ruta.navigate(['/']);
    }
  }
}










  // Inyectar en el constructor el formBuilder
  //constructor( private formBuilder: FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router){ 
    ///Creamos el grupo de controles para el formulario de login
   // this.form= this.formBuilder.group({
     // email:['', [Validators.required, Validators.email]],
     // password:['',[Validators.required, Validators.minLength(8)]],
     
  // })
//}
  
  
 //ngOnInit(): void {
 // sessionStorage.setItem('currentUser', "");
//}

//get Mail(){
 // return this.form.get("email");
//}

//get MailInvalido(){
 // return this.Mail?.errors && this.Mail?.touched;
//}

//get MailValido(){
  //return !this.Mail?.errors && this.Mail?.touched;
//}

 //get Password(){
  //return this.form.get("password");
//}

//get PasswordInvalido(){
 // return this.Password?.errors && this.Password?.touched;
//}

//get PasswordValido(){
  //return !this.Password?.errors && this.Password?.touched;
//}



//onEnviar(event: Event) {
  //event.preventDefault;
  //if (this.form.valid) {
   // let persona:Persona = new Persona("", "", "", "", "", "", "", "");
    //let persona:Persona = new Persona("", "", "", "", "", "",this.form.get("email"),this.form.get("password"));
    //this.autenticacionService.login(this.form.value).subscribe(data => {
    //  console.log("DATA: " + JSON.stringify(data.id));
      //if (data.id) {
      //  alert("Puedes editar el portfolio");
       // this.ruta.navigate(['dashboard']);
     // } else {
     //   alert("Error al iniciar sesión, credenciales no válidas!!!");
     // }
    //}, error => {
    //  alert("ERROR!!!");
    //})
  //} else {
  //  sessionStorage.setItem('currentUser', "");
   // alert("Error! No tienes acceso");
  //  this.ruta.navigate(['/']);
 // }
//}
//}
  
