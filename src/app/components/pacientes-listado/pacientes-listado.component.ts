import { Component, OnInit } from '@angular/core';
import {  BsModalRef,BsModalService, } from 'ngx-bootstrap/modal';

import { PacientesModalComponent } from '../pacientes-modal/pacientes-modal.component';

@Component({
  selector: 'app-pacientes-listado',
  templateUrl: './pacientes-listado.component.html',
  styleUrls: ['./pacientes-listado.component.css']
})
export class PacientesListadoComponent {
  private bsModalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    
  ) { }


  ngOnInit(): void { }

  /// Autor: Jhon Lucas Garcia Bernabe
  /// Fecha: 05-01-2023
  /// <sumary>
  /// Permite abrir el modal de pacientes y enviar un nuevo registro
  /// </sumary>
  AbrirModalPaciente()
  {
    this.bsModalRef=this.modalService.show(PacientesModalComponent,{backdrop:'static',class:'modal-lg'});
  }
    /// Autor: Jhon Lucas Garcia Bernabe
  /// Fecha: 05-01-2023
  /// <sumary>
  /// Permite abrir el modal de pacientes y editar un  registro
  /// </sumary>
 EditarModalPaciente()
  {
    this.bsModalRef=this.modalService.show(PacientesModalComponent,{backdrop:'static',class:'modal-lg'});
  }
    /// Autor: Jhon Lucas Garcia Bernabe
  /// Fecha: 05-01-2023
  /// <sumary>
  /// Permite abrir el modal de pacientes y enviar un nuevo registro
  /// </sumary>
 
  
}
