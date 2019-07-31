import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/app.state';
import * as actions from './state/task.actions';
import { Observable } from 'rxjs';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  // STORE ACCESS
  storeSelectTask(): Observable<any> {
    return this.store.select('task');
  }

  storeLoadUserTask(userId: string) {
    this.store.dispatch(new actions.TaskLoad(userId));
  }

  storeAddUserTask(task: Task) {
    this.store.dispatch(new actions.TaskAdd(task));
  }

  storeActionClear() {
    this.store.dispatch(new actions.Clear());
  }

  // HTTP REQUEST
  getUserTask(userId: string) {
    return this.http.get(`user/tasks/${userId}`);
  }

  addTask(task: Task) {
    return this.http.post('task', task);
  }
}
