import { Action } from '@ngrx/store';
import * as actions from './date-selection.actions';
import { AppState } from 'src/app/shared/app.state';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

const initialAppState: AppState = {
    action: 'initial',
    status: 'initial',
    message: ''
};

export function dateReducer(state = initialAppState, action: actions.Actions) {
    const payload = action.payload;
    switch (action.type) {
        case actions.DATE_CHANGED:
            return {
                ...state,
                action: 'DATE_CHANGED',
                date: payload,
                status: 'ok',
                message: 'success'
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
