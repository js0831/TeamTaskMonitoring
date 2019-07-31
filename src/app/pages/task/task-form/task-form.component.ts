import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.interface';
import { LoginService } from '../../login/login.service';
import { AppState } from 'src/app/shared/app.state';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit, OnDestroy {

  @Output() closed = new EventEmitter<boolean>();
  show = false;
  form: FormGroup;
  subs: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    setTimeout( x => { this.show = true; }, 250);

    this.form = this.fb.group({
      title: [null, Validators.required],
      description: [null]
    });
  }

  handleCancel() {
    this.show = false;
    setTimeout( x => {
      this.closed.emit(true);
    }, 500);
  }

  submit() {
    this.utilityService.markFormControlsDirty(this.form);
    if (this.form.invalid) {return; }
    const newTask: Task = {
      title: this.form.value.title,
      description: this.form.value.description,
      status: 0,
      user: LoginService.getCurrentUser().id
    };

    this.taskService.storeAddUserTask(newTask);
    this.handleCancel();
  }

  ngOnDestroy() {
    this.subs.forEach(x => x.unsubscribe());
  }
}
