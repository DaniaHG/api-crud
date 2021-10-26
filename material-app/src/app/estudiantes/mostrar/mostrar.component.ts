import { Router } from '@angular/router';
import { EstudiantesService } from './../services/estudiantes.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarDataSource, Estudiante } from './mostrar-datasource';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Estudiante>;
  dataSource!: MostrarDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_persona','fecha_ingreso','carnet','nombre','apellido','fecha_nacimiento','Direccion','status','Acciones'];


  constructor(private estudiantesService:EstudiantesService, private router:Router) {

  }

  ngOnInit(): void {
    this.listarEstudiantes();
  }

  listarEstudiantes(){
    this.dataSource = new MostrarDataSource();
    this.estudiantesService.getEstudiantes().subscribe(
      res=> this.dataSource.data = res,
      err => console.log(err)
    );
  }

  eliminarEstudiantes(id:string){
    console.log(id);
    this.estudiantesService.deleteEstudiantes(id);
    this.listarEstudiantes();
  }

  modificarEstudiantes(id:string){
    this.router.navigate(['/editar/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
