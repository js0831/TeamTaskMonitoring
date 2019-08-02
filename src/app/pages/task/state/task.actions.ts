import { Action } from '@ngrx/store';

export const CLEAR = '[Clear]';
export const TASK_LOAD = '[TASK] Load';
export const TASK_LOAD_FINISH = '[TASK] Load finish';
export const TASK_ADD = '[TASK] Add';
export const TASK_ADD_FINISH = '[TASK] Add finish';
export const TASK_DELETE = '[TASK] Delete';
export const TASK_DELETE_FINISH = '[TASK] Delete finish';

export class Clear implements Action {
    readonly type = CLEAR;
    constructor(public payload?: any) {}
}

export class TaskLoad implements Action {
    readonly type = TASK_LOAD;
    constructor(public payload: any) {}
}

export class TaskLoadFinish implements Action {
    readonly type = TASK_LOAD_FINISH;
    constructor(public payload: any) {}
}

export class TaskAdd implements Action {
    readonly type = TASK_ADD;
    constructor(public payload: any) {}
}

export class TaskAddFinish implements Action {
    readonly type = TASK_ADD_FINISH;
    constructor(public payload: any) {}
}

export class TaskDelete implements Action {
    readonly type = TASK_DELETE;
    constructor(public payload: any) {}
}

export class TaskDeleteFinish implements Action {
    readonly type = TASK_DELETE_FINISH;
    constructor(public payload: any) {}
}

export type Actions = TaskLoad
| TaskLoadFinish
| TaskAdd
| TaskAddFinish
| TaskDelete
| TaskDeleteFinish
| Clear;
