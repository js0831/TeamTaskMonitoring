import { User } from '../pages/registration/user.interface';
import { Page } from './components/page/page.interface';

export interface AppState {

    action?: string;
    status?: string;
    message?: string;

    user?: User;
    page?: {
        history?: Page[],
        current?: Page
    };
}
