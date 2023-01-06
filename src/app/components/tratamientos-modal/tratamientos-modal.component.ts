import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tratamientos-modal',
  templateUrl: './tratamientos-modal.component.html',
  styleUrls: ['./tratamientos-modal.component.css']
})
export class TratamientosModalComponent {
  dataFormGroup:FormGroup;
  constructor(private bsModalRef:BsModalRef){}
  ngOnInit(): void {
    this.dataFormGroup = new FormGroup({
      selectPaciente: new FormControl('', [Validators.required]),
      selectTratamiento: new FormControl('', [Validators.required]),
      inputPrecio: new FormControl('', [Validators.required]),
      inputCantidad: new FormControl('', [Validators.required]),
      inputFecha: new FormControl('', [Validators.required]),
      inpuTotal: new FormControl(''),
      textDescripcion: new FormControl(''),
     
          
      inputfoto: new FormControl(''),
      inputObservacion: new FormControl(''),
      
    });
  }
  
  get Controls(){
    return this.dataFormGroup.controls;
  }
  CerrarModal()
  {
    this.bsModalRef.hide();
  }
  GuardarTratamiento() {
    for (let i in this.dataFormGroup.controls) {
      this.dataFormGroup.controls[i].markAsTouched();
    }
    if (this.dataFormGroup.valid) {
      console.log('OK');
      this.MostrarNotificacionGeneral('success','Se ha realizado el proceso con éxito.','')
    } else {
      console.log('Error');
      this.MostrarNotificacionGeneral('error','Hay campos obligatorios','¡Error en el proceso!')
    }
  }
  MostrarNotificacionSuccess(mensaje: string, titulo: string) {
    Swal.fire({
      icon: 'success',
      title: titulo,
      text: mensaje,
    });
  }
  
  MostrarNotificacionError(mensaje: string, titulo: string) {
    Swal.fire({
      icon: 'error',
      title: titulo,
      text: mensaje,
    });
  }
  
  MostrarNotificacionInfo(mensaje: string, titulo: string) {
    Swal.fire({
      icon: 'info',
      title: titulo,
      text: mensaje,
    });
  }
  
  MostrarNotificacionWarning(mensaje: string, titulo: string) {
    Swal.fire({
      icon: 'warning',
      title: titulo,
      text: mensaje,
    });
  }
  MostrarNotificacionGeneral(icon:any, mensaje: string, titulo: string) {
    Swal.fire({
      icon: icon,
      title: titulo,
      text: mensaje,
    });
  }
  }
  