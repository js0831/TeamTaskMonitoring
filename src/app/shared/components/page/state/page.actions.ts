import { Action } from '@ngrx/store';

export const PAGE_CHANGED = '[PAGE] Changed';
export const PAGE_CLEAR = '[PAGE] Clear';

export class PageChanged implements Action {
    readonly type = PAGE_CHANGED;
    constructor(public payload: any) {}
}

export class PageClear implements Action {
    readonly type = PAGE_CLEAR;
    constructor(public payload?: any) {}
}

export type Actions = PageChanged
| PageClear;
