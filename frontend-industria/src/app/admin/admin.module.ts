import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroAdminComponent } from './componentAdmin/registro-admin/registro-admin.component';
import { PerfilAdminComponent } from './componentAdmin/perfil-admin/perfil-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginAdminComponent } from './componentAdmin/login-admin/login-admin.component'; 
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import { PlanesComponent } from './componentAdmin/planes/planes.component';
import { LoginClienteComponent } from './cliente/login-cliente/login-cliente.component';
import { RegistroClienteComponent } from './cliente/registro-cliente/registro-cliente.component';
import { LandingFestivalComponent } from './cliente/landing-festival/landing-festival.component';

@NgModule({
  declarations: [
  
    RegistroAdminComponent,
    PerfilAdminComponent,
    LoginAdminComponent,
    PlanesComponent,
    LoginClienteComponent,
    RegistroClienteComponent,
    LandingFestivalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    RegistroAdminComponent
  ]

})
export class AdminModule { }
