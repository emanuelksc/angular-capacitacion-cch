import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PacientesListadoComponent } from './pacientes-listado/pacientes-listado.component';
import { PacientesModalComponent } from './pacientes-modal/pacientes-modal.component';
import {  BsModalRef,BsModalService, } from 'ngx-bootstrap/modal';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TratamientosListadoComponent } from './tratamientos-listado/tratamientos-listado.component';
import { TratamientosModalComponent } from './tratamientos-modal/tratamientos-modal.component';

@NgModule({
  declarations: [
    PacientesListadoComponent,
    PacientesModalComponent,
    TratamientosListadoComponent,
    TratamientosModalComponent
  ],
  imports: [
    CommonModule,
   ModalModule.forRoot(),
   TooltipModule.forRoot(),
   FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
