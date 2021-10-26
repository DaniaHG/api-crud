import { MostrarDocentesComponent } from './docentes/mostrar-docentes/mostrar-docentes.component';
import { AgregarDocentesComponent } from './docentes/agregar-docentes/agregar-docentes.component';
import { ModificarDocentesComponent } from './docentes/modificar-docentes/modificar-docentes.component';
import { ModificarComponent } from './estudiantes/modificar/modificar.component';
import { AgregarComponent } from './estudiantes/agregar/agregar.component';
import { MostrarComponent } from './estudiantes/mostrar/mostrar.component';
import { EditarFormularioComponent } from './personas/editar-formulario/editar-formulario.component';
import { MiTablaComponent } from './personas/mi-tabla/mi-tabla.component';
import { MiFormularioComponent } from './personas/mi-formulario/mi-formulario.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'personas', pathMatch:'full'},
  {path: 'personas', component:  MiTablaComponent},
  {path: 'agregar', component: MiFormularioComponent},
  {path: 'edit/:id', component: EditarFormularioComponent},
  {path: 'estudiantes', component: MostrarComponent},
  {path: 'agregarestudiantes', component: AgregarComponent},
  {path: 'editar/:id', component: ModificarComponent},
  {path: 'docentes', component: MostrarDocentesComponent},
  {path: 'agregar-docentes', component: AgregarDocentesComponent},
  {path: 'editar-docentes/:id', component: ModificarDocentesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
