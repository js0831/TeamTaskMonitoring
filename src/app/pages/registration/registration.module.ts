import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RegistrationRoutingModule } from './registration-routing.module'; 
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzInputModule, NzButtonModule, NzFormModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule
  ]
})
export class RegistrationModule { }
