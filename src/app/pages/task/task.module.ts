import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzTabsModule, NzEmptyModule, NzListModule, NzIconModule, NzBadgeModule, NzDatePickerModule, NzMenuModule, NzModalModule, NzFormModule, NzInputModule, NzDividerModule } from 'ng-zorro-antd';
import { TaskDateSelectionComponent } from './task-date-selection/task-date-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskActionComponent } from './task-action/task-action.component';
import { TaskFormComponent } from './task-form/task-form.component';



@NgModule({
  declarations: [
    TaskComponent,
    TaskDateSelectionComponent,
    TaskActionComponent,
    TaskFormComponent
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
    NzDatePickerModule,
    NzMenuModule,
    NzModalModule,
    NzFormModule,
    NzInputModule
  ]
})
export class TaskModule { }
