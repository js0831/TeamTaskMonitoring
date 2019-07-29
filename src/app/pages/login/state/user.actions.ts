import { Action } from '@ngrx/store';

export const USER_LOGIN = '[USER] Login';
export const USER_LOGIN_FINISH = '[USER] Login finish';

export class UserLogin implements Action {
    readonly type = USER_LOGIN;
    constructor(public payload: any) {}
}

export class UserLoginFinish implements Action {
    readonly type = USER_LOGIN_FINISH;
    constructor(public payload: any) {}
}

export type Actions = UserLogin
| UserLoginFinish;
