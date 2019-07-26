import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from 'src/app/shared/components/page/page.component';
import { NzButtonModule, NzFormModule, NzInputModule } from 'ng-zorro-antd';



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
    NzButtonModule,
    NzFormModule,
    NzInputModule
  ]
})
export class LoginModule { }
