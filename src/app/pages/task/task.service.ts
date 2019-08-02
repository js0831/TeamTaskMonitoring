import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/app.state';
import * as actions from './state/task.actions';
import { Observable, Subject } from 'rxjs';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private events = new Subject<{action: string, data?: any}>();

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  taskEvents() {
    return this.events;
  }

  callTaskEvent(event: {action: string, data?: any}) {
    this.events.next(event);
  }

  // STORE ACCESS
  storeSelectTask(): Observable<any> {
    return this.store.select('task');
  }

  storeLoadUserTask(payload: { userId: string, date: string } ) {
    this.store.dispatch(new actions.TaskLoad(payload));
  }

  storeAddUserTask(task: Task) {
    this.store.dispatch(new actions.TaskAdd(task));
  }

  storeUpdateUserTask(task: Task) {
    this.store.dispatch(new actions.TaskUpdate(task));
  }

  storeSelectUserTask(task: Task) {
    this.store.dispatch(new actions.TaskSelect(task));
  }

  storeDeleteUserTask(id: string) {
    this.store.dispatch(new actions.TaskDelete(id));
  }

  storeActionClear() {
    this.store.dispatch(new actions.Clear());
  }

  // HTTP REQUEST
  getUserTask(params: { userId: string, date: string }) {
    return this.http.get(`user/tasks/${params.userId}/date/${params.date}`);
  }

  addTask(task: Task) {
    return this.http.post('task', task);
  }

  updateTask(task: Task) {
    return this.http.put(`task/${task._id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`task/${id}`);
  }
}
