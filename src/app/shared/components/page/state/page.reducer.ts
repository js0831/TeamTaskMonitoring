import { Action } from '@ngrx/store';
import * as actions from './page.actions';
import { AppState } from 'src/app/shared/app.state';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

const initialAppState: AppState = {
    action: 'initial',
    status: 'initial',
    message: '',
    page: {
        history: []
    }
};

export function pageReducer(state = initialAppState, action: actions.Actions) {
    const payload = action.payload;
    switch (action.type) {
        case actions.PAGE_CHANGED:

            const currentHistory = state.page.history || [];
            currentHistory.push(action.payload);
            const pageData = {
                history: currentHistory,
                current: action.payload
            };
            LocalStorageService.save('page', pageData);
            return {
                ...state,
                page: pageData,
                action: 'PAGE_CHANGED',
                status: 'ok',
                message: 'success'
            };

        case actions.PAGE_CLEAR:
            LocalStorageService.remove('page');
            return {
                ...state,
                page: {history: []},
                action: 'PAGE_CLEAR',
                status: 'ok',
                message: 'success'
            };
        default:
            const currentPage = LocalStorageService.get('page');
            return{
                ...state,
                action: '',
                page: currentPage || {history: []}
            };
    }
}
