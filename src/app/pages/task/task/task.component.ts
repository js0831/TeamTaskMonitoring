import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../task.service';
import { AppState } from 'src/app/shared/app.state';
import { LoginService } from '../../login/login.service';
import { User } from '../../registration/user.interface';
import { Task } from '../task.interface';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {

  isShowTaskForm = false;
  currentUser: User;
  userTask: {
    title: string,
    badgeColor?: string,
    icon: string,
    data: Task[]
  }[] = [
    { title: 'Todo', icon: 'tool', data: [] },
    { title: 'On Going', icon: 'sync', badgeColor: '#5590fd', data: [] },
    { title: 'Done', icon: 'check-circle', badgeColor: '#52c41a', data: [] },
    { title: 'On Hold', icon: 'pause-circle', badgeColor: '#f56622', data: [] }
  ];
  selectedTask: Task;
  subs: Subscription[] = [];

  constructor(
    private taskService: TaskService,
    private message: NzMessageService
  ) {
    this.currentUser = LoginService.getCurrentUser();
  }

  ngOnInit() {
    this.taskService.storeLoadUserTask(this.currentUser.id);

    this.subs[0] = this.taskService.storeSelectTask().subscribe((state: AppState) => {
      if (
        state.action === 'TASK_LOAD_FINISH' ||
        state.action === 'TASK_ADD_FINISH'
      ) {
        this.userTask.forEach( (x) => x.data = []);
        state.task.forEach( (x: Task) => {
          // tslint:disable-next-line: radix
          const stat = x.status;
          this.userTask[stat].data.push(x);
        });

        if (state.action === 'TASK_ADD_FINISH') {
          setTimeout(x => {
            this.message.create('success', 'Success');
          }, 500);
          this.taskService.storeActionClear();
        }
      }
    });
  }

  selectask(task: Task) {
    this.selectedTask = task;
  }

  ngOnDestroy() {
    this.subs.forEach(x => x.unsubscribe());
  }
}
