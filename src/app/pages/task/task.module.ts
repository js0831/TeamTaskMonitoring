import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzTabsModule, NzEmptyModule, NzListModule, NzIconModule, NzBadgeModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    TaskComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule,
    NzTabsModule,
    NzEmptyModule,
    NzListModule,
    NzBadgeModule
  ]
})
export class TaskModule { }
