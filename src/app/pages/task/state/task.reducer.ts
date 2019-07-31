import { Action } from '@ngrx/store';
import * as actions from './task.actions';
import { AppState } from 'src/app/shared/app.state';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

const initialAppState: AppState = {
    action: 'initial',
    status: 'initial',
    message: ''
};

export function taskReducer(state = initialAppState, action: actions.Actions) {
    const payload = action.payload;
    switch (action.type) {
        case actions.TASK_LOAD_FINISH:
            return {
                ...state,
                action: 'TASK_LOAD_FINISH',
                task: payload.data,
                status: payload.status,
                message: payload.message
            };

        case actions.TASK_ADD_FINISH:
            return {
                ...state,
                action: 'TASK_ADD_FINISH',
                task: [...state.task, payload.data],
                status: payload.status,
                message: payload.message
            };
        default:
            return{
                ...state,
                action: '',
                status: '',
                message: ''
            };
    }
}
