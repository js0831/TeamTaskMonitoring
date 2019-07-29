import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PageComponent } from './components/page/page.component';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component'; 
import { NzButtonModule, NzIconModule, NzButtonComponent } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    PageComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule
  ],
  exports: [
    PageComponent,
    NavigationComponent,
    NzButtonComponent
  ],
  providers: []
})
export class SharedModule { }
