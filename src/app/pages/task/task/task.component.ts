import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../task.service';
import { AppState } from 'src/app/shared/app.state';
import { LoginService } from '../../login/login.service';
import { User } from '../../registration/user.interface';
import { Task } from '../task.interface';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';
import { DateSelectionService } from 'src/app/shared/components/date-selection/date-selection.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {

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
  date: any;

  constructor(
    private taskService: TaskService,
    private message: NzMessageService,
    private dateSelectionService: DateSelectionService
  ) {
    this.currentUser = LoginService.getCurrentUser();
  }

  ngOnInit() {
    this.loadSubscriptions();
  }

  private loadSubscriptions() {
    this.subs[0] = this.taskService.storeSelectTask().subscribe((state: AppState) => {
      const updateListActions = [
        'TASK_LOAD_FINISH',
        'TASK_ADD_FINISH',
        'TASK_DELETE_FINISH',
        'TASK_UPDATE_FINISH'
      ];
      if ( updateListActions.indexOf(state.action) >= 0 ) {
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
        this.selectedTask = undefined;
      }
    });
    this.subs[1] = this.dateSelectionService.storeSelectDate().subscribe( (x: AppState) => {
      if (x.action === 'DATE_CHANGED') {
        this.taskService.storeLoadUserTask({
          userId: this.currentUser.id,
          date: x.date
        });
        this.date = x.date;
      }
    });
  }

  selectask(task: Task) {
    this.selectedTask = undefined; // CLEAR FIRST TO DESTROY SUBSCRIPTIONS

    setTimeout( () => {
      this.selectedTask = task;
      this.taskService.storeSelectUserTask(task);
    });
  }

  ngOnDestroy() {
    this.subs.forEach(x => x.unsubscribe());
  }

  isPreviousDate() {
    const currentDate = new Date(new Date().toDateString());
    const selectedDate = new Date(new Date(this.date).toDateString());
    return currentDate > selectedDate;
  }

  addTask() {
    this.taskService.callTaskEvent({
      action: 'ADD_TASK'
    });
  }
}
