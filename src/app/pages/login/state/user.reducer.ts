import { Action } from '@ngrx/store';
import * as actions from './user.actions';
import { AppState } from 'src/app/shared/app.state';

const initialAppState: AppState = {
    action: 'initial',
    status: 'initial',
    message: ''
};

export function userReducer(state = initialAppState, action: actions.Actions) {
    const payload = action.payload;
    switch (action.type) {
        case actions.USER_LOGIN_FINISH:
            const data = payload.data || {};
            return {
                ...state,
                action: 'USER_LOGIN_FINISH',
                user: {
                    username: data.username,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    token: payload.token
                },
                status: payload.status,
                message: payload.message
            };
        default:
            return state;
    }
}
