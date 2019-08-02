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
            return this.taskService.getUserTask(action.payload).pipe(
                map((result) => {
                    return new actions.TaskLoadFinish(result);
                })
            );
        })
    );

    @Effect() taskAdd: Observable<Action> = this.actions$.pipe(
        ofType(actions.TASK_ADD),
        switchMap((action: actions.TaskAdd) => {
            return this.taskService.addTask(action.payload).pipe(
                map((result) => {
                    return new actions.TaskAddFinish(result);
                })
            );
        })
    );

    @Effect() taskUpdate: Observable<Action> = this.actions$.pipe(
        ofType(actions.TASK_UPDATE),
        switchMap((action: actions.TaskUpdate) => {
            return this.taskService.updateTask(action.payload).pipe(
                map((result) => {
                    return new actions.TaskUpdateFinish(result);
                })
            );
        })
    );

    @Effect() taskDelete: Observable<Action> = this.actions$.pipe(
        ofType(actions.TASK_DELETE),
        switchMap((action: actions.TaskDelete) => {
            return this.taskService.deleteTask(action.payload).pipe(
                map((result) => {
                    return new actions.TaskDeleteFinish({
                        ...result,
                        id: action.payload
                    });
                })
            );
        })
    );

}
