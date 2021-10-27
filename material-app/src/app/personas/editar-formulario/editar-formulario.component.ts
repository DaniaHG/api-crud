import { Persona } from './../mi-tabla/mi-tabla-datasource';
import { PersonaService } from './../services/persona.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-formulario',
  templateUrl: './editar-formulario.component.html',
  styleUrls: ['./editar-formulario.component.css']
})
export class EditarFormularioComponent implements OnInit{

  persona: Persona ={
    id: '',
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    Direccion: ''
  }


  constructor(private router:Router,
              private activeRoute:ActivatedRoute,
              private personaService:PersonaService) {

  }

  ngOnInit(): void{
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.personaService.getIdPersonas(id_entrada).subscribe(
        (res:any) =>{
          this.persona=res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      )
    }

  }
  onActualizar(){
    this.personaService.putPersona(this.persona.id, this.persona);
    this.router.navigate(['/personas'])

  }
}
