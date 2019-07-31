import { Action } from '@ngrx/store';

export const TASK_LOAD = '[TASK] Load';
export const TASK_LOAD_FINISH = '[TASK] Load finish';

export class TaskLoad implements Action {
    readonly type = TASK_LOAD;
    constructor(public payload: any) {}
}

export class TaskLoadFinish implements Action {
    readonly type = TASK_LOAD_FINISH;
    constructor(public payload: any) {}
}

export type Actions = TaskLoad
| TaskLoadFinish;
