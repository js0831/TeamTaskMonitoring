import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.interface';
import { LoginService } from '../../login/login.service';
import { AppState } from 'src/app/shared/app.state';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { DateSelectionService } from 'src/app/shared/components/date-selection/date-selection.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit, OnDestroy {

  show = false;
  form: FormGroup;
  subs: Subscription[] = [];
  date: string;
  selectedTask: Task;
  title = '';
  formType = '';

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private utilityService: UtilityService,
    private dateSelectionService: DateSelectionService
  ) { }

  ngOnInit() {

    this.subs[0] = this.dateSelectionService.storeSelectDate().subscribe( (x: AppState) => {
      this.date = x.date;
    });

    this.subs[1] = this.taskService.taskEvents().subscribe(x => {
      if ( [
            'ADD_TASK',
            'VIEW_TASK',
            'EDIT_TASK'
          ].indexOf(x.action) >= 0
      ) {
        this.formType = x.action;
        this.show = true;
        this.buildForm();
        this.buildTitle();
      }
    });

    this.subs[2] = this.taskService.storeSelectTask().subscribe( (x: AppState) => {
      if (x.action === 'TASK_SELECT') {
        this.selectedTask = x.selectedTask;
      }
    });
  }

  buildTitle() {
    switch (this.formType) {
      case 'ADD_TASK':
        this.title = 'Add New Task';
        break;

      case 'EDIT_TASK':
        this.title = `Edit Task : ${this.selectedTask.title}`;
        break;

      case 'VIEW_TASK':
            this.title = `Task : ${this.selectedTask.title}`;
            break;
      default:
        break;
    }
  }

  buildForm() {
    let group = {
      id: [],
      title: [],
      description: [],
      date: [this.date, Validators.required ]
    };
    if ( this.formType !== 'ADD_TASK' ) {
      group = {
        id: [this.selectedTask._id, Validators.required],
        title: [this.selectedTask.title, Validators.required],
        description: [this.selectedTask.description],
        date: [ this.selectedTask.date, Validators.required ]
      };
    }
    this.form = this.fb.group(group);
  }

  handleCancel() {
    this.show = false;
  }

  submit() {
    this.utilityService.markFormControlsDirty(this.form);
    if (this.form.invalid) {return; }
    const value = this.form.value;
    const newTask: Task = {
      _id: value.id,
      title: value.title,
      description: value.description,
      status: this.formType === 'ADD_TASK' ? 0 : this.selectedTask.status,
      user: LoginService.getCurrentUser().id,
      date: value.date
    };

    if ( this.formType === 'ADD_TASK' ) {
      this.taskService.storeAddUserTask(newTask);
    } else {
      this.taskService.storeUpdateUserTask(newTask);
    }

    this.handleCancel();
  }

  ngOnDestroy() {
    this.subs.forEach(x => x.unsubscribe());
  }
}
