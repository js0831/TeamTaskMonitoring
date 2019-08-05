import { Action } from '@ngrx/store';
import * as actions from './task.actions';
import { AppState } from 'src/app/shared/app.state';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Task } from '../task.interface';
import { UtilityService } from 'src/app/shared/services/utility.service';

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

        case actions.TASK_UPDATE_FINISH:
                const foundIndex = state.task.findIndex( (x: Task) => x._id === payload.data._id);
                const clone = Object.assign([], state.task);
                const isSameDate = UtilityService.getDateDifference(payload.data.date, clone[foundIndex].date) === 0;
                clone[foundIndex] = payload.data;
                const finalState = isSameDate ? clone : [...state.task.filter( x => x._id !== payload.data._id)];

                return {
                    ...state,
                    action: 'TASK_UPDATE_FINISH',
                    task: finalState,
                    status: payload.status,
                    message: payload.message
                };

        case actions.TASK_DELETE_FINISH:
            return {
                ...state,
                action: 'TASK_DELETE_FINISH',
                task: [...state.task.filter( x => x._id !== payload.id)],
                status: payload.status,
                message: payload.message
            };

        case actions.TASK_SELECT:
                return {
                    ...state,
                    action: 'TASK_SELECT',
                    selectedTask: payload,
                    status: '',
                    message: ''
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
