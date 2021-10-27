import { Router } from '@angular/router';
import { DocentesService } from './../services/docentes.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarDocentesDataSource, Docente } from './mostrar-docentes-datasource';

@Component({
  selector: 'app-mostrar-docentes',
  templateUrl: './mostrar-docentes.component.html',
  styleUrls: ['./mostrar-docentes.component.css']
})
export class MostrarDocentesComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Docente>;
  dataSource!: MostrarDocentesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_persona', 'fecha_ingreso','nombre','apellido','fecha_nacimiento','Direccion','Acciones'];

  constructor(private docentesService:DocentesService, private router:Router) {
    this.listarDocentes();
  }

  ngOnInit(): void {
    this.listarDocentes();
  }

  listarDocentes(){
    this.dataSource = new MostrarDocentesDataSource();
    this.docentesService.getDocentes().subscribe(
      res=> this.dataSource.data = res,
      err => console.log(err)
    );
  }

  eliminarDocentes(id:string){
    this.docentesService.deleteDocentes(id);
    this.listarDocentes();
    setTimeout(location.reload.bind(location), 500);
  }


  modificarDocentes(id:string){
    this.router.navigate(['/editar-docentes/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
