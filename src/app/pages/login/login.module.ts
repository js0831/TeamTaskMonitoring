import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {
  NzButtonModule,
  NzFormModule, NzInputModule, NzMessageContainerComponent, NzMessageComponent, NzMessageModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    NzFormModule,
    NzInputModule,
    NzMessageModule
  ],
  entryComponents: [
    NzMessageComponent,
    NzMessageContainerComponent
  ]
})
export class LoginModule { }
