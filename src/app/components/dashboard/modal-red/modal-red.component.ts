import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Red } from '../../entidades/red';
import { RedService } from '../../servicios/red.service';

@Component({
  selector: 'app-modal-red',
  templateUrl: './modal-red.component.html',
  styleUrls: ['./modal-red.component.css']
})
export class ModalRedComponent implements OnInit {

  form: FormGroup;
  item: Red[] = [];
  id?:number;
  redes: any;

  constructor(private formBuilder: FormBuilder, private redService: RedService) {
    this.form = this.formBuilder.group({
      id: [''],
      clase: ['', [Validators.required]],
      red: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
    this.cargarRedes();
  }
// definimos el arreglo de items

onLoadModal(item: any) {
  this.form.get("clase")?.setValue(item.clase);
  this.form.get("red")?.setValue(item.red);
  this.form.get("id")?.setValue(item.id);
  }

  cargarRedes(): void {
    this.redService.list().subscribe(
      data => {
        this.redes = data;
      }
    )
  }

  cargarDetalle(id: number){
    this.redService.getById(id).subscribe(
      {
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }
//👇 esto es solo para hacer pruebas en local
  guardar() {
    console.log("FUNCIONA!!!")
    let redes = this.form.value;
    console.log()
    if (redes.id == '') {
      this.redService.save(redes).subscribe({
        next: (data) => {
          this.cargarRedes();
          this.form.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Red agregada correctamente");
    } else {
      this.redService.save(redes).subscribe({
        next: (data) => {
          this.cargarRedes();
          this.form.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Red modificada correctamente");
    }
  }
  
  borrar(id: number): void {
    if (confirm('¿Está seguro que desea eliminar este elemento?')) {
      this.redService.delete(id).subscribe(
        data => {
          this.cargarRedes();
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
