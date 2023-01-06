import { Component } from '@angular/core';
import {  BsModalRef,BsModalService, } from 'ngx-bootstrap/modal';
import { TratamientosModalComponent } from '../tratamientos-modal/tratamientos-modal.component';
@Component({
  selector: 'app-tratamientos-listado',
  templateUrl: './tratamientos-listado.component.html',
  styleUrls: ['./tratamientos-listado.component.css']
})
export class TratamientosListadoComponent {
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
  AbrirModalTratamiento()
  {
    this.bsModalRef=this.modalService.show(TratamientosModalComponent,{backdrop:'static',class:'modal-lg'});
  }
    /// Autor: Jhon Lucas Garcia Bernabe
  /// Fecha: 05-01-2023
  /// <sumary>
  /// Permite abrir el modal de pacientes y editar un  registro
  /// </sumary>
 EditarModalTratamiento()
  {
    this.bsModalRef=this.modalService.show(TratamientosModalComponent,{backdrop:'static',class:'modal-lg'});
  }
    /// Autor: Jhon Lucas Garcia Bernabe
  /// Fecha: 05-01-2023
  /// <sumary>
  /// Permite abrir el modal de pacientes y enviar un nuevo registro
  /// </sumary>
 
  
}
