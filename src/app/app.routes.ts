import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { RespuestasComponent } from './respuestas/respuestas.component';
export const routes: Routes = [
    { path: '', redirectTo: '/encuesta', pathMatch: 'full' },
    { path: 'encuesta', component: EncuestaComponent },
    { path: 'respuestas', component: RespuestasComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  