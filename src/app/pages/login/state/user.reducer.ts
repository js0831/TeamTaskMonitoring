import { Action } from '@ngrx/store';
import * as actions from './user.actions';
import { AppState } from 'src/app/shared/app.state';
import { User } from '../../registration/user.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

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
            const user: User = {
                username: data.username,
                firstname: data.firstname,
                lastname: data.lastname,
                token: payload.token
            };
            LocalStorageService.save('user', user);
            return {
                ...state,
                action: 'USER_LOGIN_FINISH',
                user,
                status: payload.status,
                message: payload.message
            };

        case actions.USER_LOGOUT:
            LocalStorageService.remove('user');
            return {
                ...state,
                action: 'USER_LOGOUT',
                user: undefined,
                status: 'ok',
                message: 'success'
            };
        default:
            const currentUser = LocalStorageService.get('user') as User;
            return{
                ...state,
                action: '',
                user: currentUser || undefined
            };
    }
}
