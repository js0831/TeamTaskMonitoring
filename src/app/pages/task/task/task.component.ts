import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { AppState } from 'src/app/shared/app.state';
import { LoginService } from '../../login/login.service';
import { User } from '../../registration/user.interface';
import { Task } from '../task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

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

  constructor(
    private taskService: TaskService,
    private loginService: LoginService
  ) {
    this.currentUser = this.loginService.getCurrentUser();
  }

  ngOnInit() {
    this.taskService.loadUserTask(this.currentUser.id);

    this.taskService.selectTask().subscribe((state: AppState) => {
      if (state.action === 'TASK_LOAD_FINISH') {
        console.log(JSON.stringify(state));
        state.task.forEach( (x: Task) => {
          // tslint:disable-next-line: radix
          const stat = x.status;
          console.log(x);
          this.userTask[stat].data.push(x);
        });
      }
    });
  }

  selectask(task: Task) {
    this.selectedTask = task;
  }
}
