import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PacientesListadoComponent } from '../components/pacientes-listado/pacientes-listado.component';

import { PagesComponent } from './pages.component';
import { TratamientosListadoComponent } from '../components/tratamientos-listado/tratamientos-listado.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [      
      { path: 'dashboard', component: DashboardComponent },
      { path: 'pacientes',component:PacientesListadoComponent },
      {path: 'tratamientos',component:TratamientosListadoComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }