import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PageComponent } from './components/page/page.component';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component'; 
import { NzButtonModule, NzIconModule, NzButtonComponent, NzAvatarModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    PageComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzAvatarModule
  ],
  exports: [
    PageComponent,
    NavigationComponent,
    NzButtonComponent,
    NzIconModule
  ],
  providers: []
})
export class SharedModule { }
