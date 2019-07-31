import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/app.state';
import * as actions from './state/task.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  selectTask(): Observable<any> {
    return this.store.select('task');
  }

  loadUserTask(userId: string) {
    this.store.dispatch(new actions.TaskLoad(userId));
  }

  getUserTask(userId: string) {
    return this.http.get(`user/tasks/${userId}`);
  }
}
