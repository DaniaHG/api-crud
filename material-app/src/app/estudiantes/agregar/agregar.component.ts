import { Router } from '@angular/router';
import { EstudiantesService } from './../services/estudiantes.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Estudiante } from '../mostrar/mostrar-datasource';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  form = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    fecha_ingreso: ['', Validators.required],
    carnet: ['', Validators.required],
    nombre: [''],
    apellido: [''],
    fecha_nacimiento: [''] ,
    Direccion: [''],
    status: ['']
  });



  constructor(private fb: FormBuilder, private estudiantesService:EstudiantesService, private router:Router) {}

  onAgregar(){
    /*console.log(this.form)*/

    const estudiante:Estudiante ={
      id:this.form.value.id,
      id_persona:this.form.value.id_persona,
      fecha_ingreso:this.form.value.fecha_ingreso,
      carnet:this.form.value.carnet,
      nombre: this.form.value.nombre,
      apellido:this.form.value.apellido,
      fecha_nacimiento:this.form.value.fecha_nacimiento,
      Direccion:this.form.value.Direccion,
      status:this.form.value.status
    }
    /*console.log(estudiante);*/

    this.estudiantesService.postEstudiantes(estudiante);
    this.router.navigate(['/estudiantes']);
    setTimeout(location.reload.bind(location), 500);

  }
}
