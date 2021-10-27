import { EstudiantesService } from './../services/estudiantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Estudiante } from '../mostrar/mostrar-datasource';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  estudiante: Estudiante ={
    id: '',
    id_persona: '',
    fecha_ingreso: '',
    carnet: '',
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    Direccion: '',
    status: ''
  }


  constructor(private fb: FormBuilder, private router:Router,
              private estudianteService: EstudiantesService,
              private activeRoute:ActivatedRoute) {}

  ngOnInit(): void{
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.estudianteService.getIdEstudiantes(id_entrada).subscribe(
        (res:any) =>{
          this.estudiante=res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      )
    }

  }
  onActualizar(){
    this.estudianteService.putEstudiantes(this.estudiante.id, this.estudiante);
    this.router.navigate(['/estudiantes']);

  }
}
