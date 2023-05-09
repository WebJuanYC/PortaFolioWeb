import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from '../../servicios/experiencia.service';
import { Experiencia } from '../../entidades/experiencia';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  form: FormGroup;
  item: Experiencia[] = [];
  id?:number;
  experiencia: any;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
  private formBuilder: FormBuilder, private sExperiencia: ExperienciaService) {
    //Creamos el grupo de controles para el formulario 
    
    this.form = this.formBuilder.group({
      trabajo: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      id: [''],
      })
   }

  ngOnInit(): void {
    this.cargarExperiencia();
  }
  
  onLoadModal(item:any){
    this.form.get("trabajo")?.setValue(item.trabajo);
    this.form.get("inicio")?.setValue(item.inicio);
    this.form.get("puesto")?.setValue(item.puesto);
    this.form.get("id")?.setValue(item.id);
  }
  
   
  cargarExperiencia(): void {
    this.sExperiencia.list().subscribe(
      data => {
        this.experiencia = data;
  }
    )
  }
  cargarDetalle(id: number){
    this.sExperiencia.getById(id).subscribe(
      {
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: ()=> console.info('complete')
      });
      console.log("Experiencia cargada correctamente");
    }
  
    //👇 esto es solo para hacer pruebas en local
  
  
  guardar() {
    
    let experiencia = this.form.value;
    if (experiencia.id == '') {
      this.sExperiencia.save(experiencia).subscribe({
        next: (data) => {
          this.cargarExperiencia();
          this.form.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Experiencia agregada correctamente");
    } else {
      this.sExperiencia.save(experiencia).subscribe({
        next: (data) => {
          this.cargarExperiencia();
          this.form.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Experiencia modificada correctamente");
    }
  }
  
      
    borrar(id: number): void {
      if (confirm('¿Está seguro que desea eliminar este elemento?')) {
        this.sExperiencia.delete(id).subscribe(
          data => {
            this.cargarExperiencia();
          },
          error => {
            console.log(error);
          }
        );
      }
  
  }
  
  reset(): void {
    this.form.reset();
    this.form.get('id')?.setValue('');
  }

}
