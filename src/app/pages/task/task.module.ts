import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzTabsModule, NzEmptyModule, NzListModule, NzIconModule, NzBadgeModule, NzDatePickerModule } from 'ng-zorro-antd';
import { TaskDateSelectionComponent } from './task-date-selection/task-date-selection.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskComponent,
    TaskDateSelectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    TaskRoutingModule,
    NzTabsModule,
    NzEmptyModule,
    NzListModule,
    NzBadgeModule,
    NzDatePickerModule
  ]
})
export class TaskModule { }
