import { Persona } from '../mi-tabla/mi-tabla-datasource';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  /*URL = 'http://localhost:3000/personas';*/
  URL = 'https://api-crud-escuela.herokuapp.com/personas';
  constructor(private httClient : HttpClient)  { }

  getPersonas(): Observable<Persona[]>{
    return this.httClient.get<Persona[]>(this.URL);
  }

  getIdPersonas(id:string): Observable<Persona[]>{
    return this.httClient.get<Persona[]>(this.URL+'/'+id);
  }

  postPersonas(persona:Persona)
  {
    return this.httClient.post(this.URL, persona).subscribe(
      res => console.log(res)
    )
  }

  deletePersonas(id:string){
    this.httClient.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  putPersona(id:string, persona:Persona){
    return this.httClient.put(this.URL+'/'+id, persona).subscribe(
      res => console.log(res)
    )
  }



}
