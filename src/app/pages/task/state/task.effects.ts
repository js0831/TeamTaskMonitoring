import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from './task.actions';
import { map, switchMap, catchError} from 'rxjs/operators';
import { Observable , of } from 'rxjs';
import { TaskService } from '../task.service';

@Injectable()
export class TaskEffects {


  constructor(
      private actions$: Actions,
      private taskService: TaskService
    ) {}

    @Effect() taskLoad: Observable<Action> = this.actions$.pipe(
        ofType(actions.TASK_LOAD),
        switchMap((action: actions.TaskLoad) => {
            alert(action.payload);
            return this.taskService.getUserTask(action.payload).pipe(
                map((result) => {
                    return new actions.TaskLoadFinish(result);
                })
            );
        })
    );

}
