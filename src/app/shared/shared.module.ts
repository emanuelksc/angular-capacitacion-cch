import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SiderbarComponent } from './siderbar/siderbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SiderbarComponent
  ],
  exports:[
    HeaderComponent,
    SiderbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
