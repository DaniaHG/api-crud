import { DocentesService } from './../services/docentes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Docente } from './../mostrar-docentes/mostrar-docentes-datasource';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-docentes',
  templateUrl: './modificar-docentes.component.html',
  styleUrls: ['./modificar-docentes.component.css']
})
export class ModificarDocentesComponent implements OnInit  {

  docente:Docente ={
    id: '',
    id_persona: '',
    fecha_ingreso: '',
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    Direccion: ''
  }

  constructor(private fb: FormBuilder,
              private router:Router,
              private docentesService:DocentesService,
              private activeRoute:ActivatedRoute) {}

  ngOnInit(): void{
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.docentesService.getIdDocentes(id_entrada).subscribe(
        (res:any) =>{
          this.docente=res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      )
    }

  }
  onActualizar(){
    this.docentesService.putDocentes(this.docente.id, this.docente);
    this.router.navigate(['/docentes'])

  }
}
