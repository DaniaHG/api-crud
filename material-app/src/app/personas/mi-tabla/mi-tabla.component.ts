import { PersonaService } from '../services/persona.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MiTablaDataSource, Persona } from './mi-tabla-datasource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-tabla',
  templateUrl: './mi-tabla.component.html',
  styleUrls: ['./mi-tabla.component.css']
})
export class MiTablaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Persona>;
  dataSource!: MiTablaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'apellido', 'fecha_nacimiento', 'Direccion', 'Acciones'];

  constructor(private personaService : PersonaService, private router:Router) {
    this.listarPersonas();
  }

  ngOnInit(): void {

    this.listarPersonas();
  }

  listarPersonas(){
    this.dataSource = new MiTablaDataSource();
    this.personaService.getPersonas().subscribe(
      res=>{
        this.dataSource.data = res;
      }
    )
  }

  eliminarPersonas(id:string){
    this.personaService.deletePersonas(id);
    this.listarPersonas();
    setTimeout(location.reload.bind(location), 500);
  }

  modificarPersonas(id:string){
    this.router.navigate(['/edit/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
