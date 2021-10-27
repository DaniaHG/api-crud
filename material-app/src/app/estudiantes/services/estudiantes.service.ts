import { Estudiante } from './../mostrar/mostrar-datasource';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  /*URL = 'http://localhost:3000/estudiantes';*/
  URL = 'https://api-crud-escuela.herokuapp.com/estudiantes';
  constructor(private httClient : HttpClient)  { }

  getEstudiantes(): Observable<Estudiante[]>{
    return this.httClient.get<Estudiante[]>(this.URL);
  }

  getIdEstudiantes(id:string): Observable<Estudiante[]>{
    return this.httClient.get<Estudiante[]>(this.URL+'/'+id);
  }

  postEstudiantes(estudiante:Estudiante)
  {
    return this.httClient.post(this.URL,estudiante).subscribe(
      res => console.log(res)
    )
  }

  deleteEstudiantes(id:string){
    this.httClient.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  putEstudiantes(id:string, estudiante:Estudiante){
    return this.httClient.put(this.URL+'/'+id, estudiante).subscribe(
      res => console.log(res)
    )
  }

}
