import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PageComponent } from './components/page/page.component';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component'; 
import { NzButtonModule, NzIconModule, NzButtonComponent, NzAvatarModule } from 'ng-zorro-antd';
import { MockComponent } from './components/mock/mock.component';

@NgModule({
  declarations: [
    PageComponent,
    NavigationComponent,
    MockComponent
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
