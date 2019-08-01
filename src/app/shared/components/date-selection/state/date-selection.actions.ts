import { Action } from '@ngrx/store';


export const DATE_CHANGED = '[DATE] Change';

export class DateChanged implements Action {
    readonly type = DATE_CHANGED;
    constructor(public payload?: any) {}
}

export type Actions = DateChanged;
