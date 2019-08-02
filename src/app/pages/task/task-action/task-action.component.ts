import { Component, OnInit, Input } from '@angular/core';
import { TaskStatus } from '../task-status.enum';
import { Task } from '../task.interface';
import { TaskService } from '../task.service';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-task-action',
  templateUrl: './task-action.component.html',
  styleUrls: ['./task-action.component.scss']
})
export class TaskActionComponent implements OnInit {

  @Input() task: Task;

  statusList: {
    id: TaskStatus,
    label: string,
    icon: string
  }[] = [
    {
      id: TaskStatus.Todo,
      label: 'Todo',
      icon: 'tool'
    },
    {
      id: TaskStatus.OnGoing,
      label: 'On Going',
      icon: 'sync'
    },
    {
      id: TaskStatus.Done,
      label: 'Done',
      icon: 'check-circle'
    },
    {
      id: TaskStatus.OnHold,
      label: 'On Hold',
      icon: 'pause-circle'
    },
  ];

  constructor(
    private taskService: TaskService,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
  }

  action(type: string) {

    switch (type) {
      case 'delete':

        this.modalService.confirm({
          nzTitle: 'Delete Confirmation',
          nzContent: 'Are you sure you want to delete this task?',
          nzOkText: 'OK',
          nzCancelText: 'Cancel',
          nzOnOk: x => {
            this.taskService.storeDeleteUserTask(this.task._id);
          }
        });


        break;
      default:
        break;
    }

  }

  updateStatus(stat: any) {
    console.log(stat);
  }
}
