import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../../servicios/contacto.service';
import { Contacto } from '../../entidades/contacto';

@Component({
  selector: 'app-modal-contacto',
  templateUrl: './modal-contacto.component.html',
  styleUrls: ['./modal-contacto.component.css']
})
export class ModalContactoComponent implements OnInit {
  form: FormGroup;
  item: Contacto[] = [];
  contacto: any;
  id?:number;
 

  constructor(private formBuilder: FormBuilder, private sContacto: ContactoService) {
    this.form = this.formBuilder.group({
      correo: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      img: ['', [Validators.required]],
      frase: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      id: [''],
      })
    }

  ngOnInit(): void {
    this.cargarContacto();
  }

  onLoadModal(item:any){
    this.form.get("correo")?.setValue(item.correo);
    this.form.get("telefono")?.setValue(item.telefono);
    this.form.get("img")?.setValue(item.img);
    this.form.get("frase")?.setValue(item.frase);
    this.form.get("titulo")?.setValue(item.titulo);
    this.form.get("id")?.setValue(item.id);
  }

  cargarContacto(): void {
    this.sContacto.list().subscribe(
      data => {
        this.contacto = data;
  }
    )
  }

  cargarDetalle(id: number){
    this.sContacto.getById(id).subscribe(
      {
        next: (data: { [key: string]: any; }) => {
          this.form.patchValue(data);
        },
        error: (e: any) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }

  guardar() {
    
    let contacto = this.form.value;
    if (contacto.id == '') {
      this.sContacto.save(contacto).subscribe({
        next: (data) => {
          this.cargarContacto();
          this.form.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Contacto agregado correctamente");
    } else {
      this.sContacto.save(contacto).subscribe({
        next: (data) => {
          this.cargarContacto();
          this.form.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Contacto modificado correctamente");
    }
  }
  
    
  
 
  borrar(id: number) {
    this.sContacto.delete(id).subscribe(
  db => {
    alert("se pudo eliminar satisfactoriamente")
    this.cargarContacto();
  },
  error => {
  alert("No se pudo eliminar")
  })
  }

}
