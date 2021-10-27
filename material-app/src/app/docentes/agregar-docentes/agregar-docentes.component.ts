import { Router } from '@angular/router';
import { DocentesService } from './../services/docentes.service';
import { Docente } from './../mostrar-docentes/mostrar-docentes-datasource';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-docentes',
  templateUrl: './agregar-docentes.component.html',
  styleUrls: ['./agregar-docentes.component.css']
})
export class AgregarDocentesComponent {
  form = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    fecha_ingreso: ['', Validators.required],
    nombre: [''],
    apellido: [''],
    fecha_nacimiento: [''],
    Direccion: ['']
  });

  constructor(private fb: FormBuilder, private docentesService:DocentesService, private router:Router) {}

  onAgregar(){
    console.log(this.form)

    const docente:Docente ={
      id:this.form.value.id,
      id_persona:this.form.value.id_persona,
      fecha_ingreso:this.form.value.fecha_ingreso,
      nombre: this.form.value.nombre,
      apellido:this.form.value.apellido,
      fecha_nacimiento:this.form.value.fecha_nacimiento,
      Direccion:this.form.value.Direccion,
    }
    console.log(docente);

    this.docentesService.postDocentes(docente);
    this.router.navigate(['/docentes']);
    setTimeout(location.reload.bind(location), 500);

  }
}
