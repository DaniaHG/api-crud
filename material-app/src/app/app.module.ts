import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MiTablaComponent } from './personas/mi-tabla/mi-tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MiFormularioComponent } from './personas/mi-formulario/mi-formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarFormularioComponent } from './personas/editar-formulario/editar-formulario.component';
import { MostrarComponent } from './estudiantes/mostrar/mostrar.component';
import { AgregarComponent } from './estudiantes/agregar/agregar.component';
import { ModificarComponent } from './estudiantes/modificar/modificar.component';
import { MostrarDocentesComponent } from './docentes/mostrar-docentes/mostrar-docentes.component';
import { AgregarDocentesComponent } from './docentes/agregar-docentes/agregar-docentes.component';
import { ModificarDocentesComponent } from './docentes/modificar-docentes/modificar-docentes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MiTablaComponent,
    MiFormularioComponent,
    EditarFormularioComponent,
    MostrarComponent,
    AgregarComponent,
    ModificarComponent,
    MostrarDocentesComponent,
    AgregarDocentesComponent,
    ModificarDocentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
