import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PageComponent } from './components/page/page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent
  ],
  providers: []
})
export class SharedModule { }
