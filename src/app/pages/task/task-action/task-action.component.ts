import { Component, OnInit } from '@angular/core';
import { TaskStatus } from '../task-status.enum';

@Component({
  selector: 'app-task-action',
  templateUrl: './task-action.component.html',
  styleUrls: ['./task-action.component.scss']
})
export class TaskActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  action(type: string) {
    console.log(type);
  }

  status(type: TaskStatus) {
    console.log(type);
  }
}
