import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-pacientes-modal',
  templateUrl: './pacientes-modal.component.html',
  styleUrls: ['./pacientes-modal.component.css']
})




export class PacientesModalComponent implements OnInit {
  dataFormGroup:FormGroup;
constructor(private bsModalRef:BsModalRef){}
ngOnInit(): void {
  this.dataFormGroup = new FormGroup({
    selectTipoDocumento: new FormControl('', [Validators.required]),
    inputNroDocumento: new FormControl('', [Validators.required]),
    inputApellidoPaterno: new FormControl('', [Validators.required]),
    inputApellidoMaterno: new FormControl('', [Validators.required]),
    inputNombres: new FormControl('', [Validators.required]),
    inputFechaNacimiento: new FormControl('', [Validators.required]),
    inputEdad: new FormControl(''),
    inputSexo: new FormControl('', [Validators.required]),
   
    selectPaises: new FormControl('', [Validators.required]),
    inputTelefono: new FormControl('', [Validators.required]),
    inputEmail: new FormControl('',[Validators.email]),
    selectEstadoCivil: new FormControl('', [Validators.required]),
    inputDireccion: new FormControl(''),
  });
}

get Controls(){
  return this.dataFormGroup.controls;
}
CerrarModal()
{
  this.bsModalRef.hide();
}
GuardarPaciente() {
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
