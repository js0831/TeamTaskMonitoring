import { User } from '../pages/registration/user.interface';

export interface AppState {

    action?: string;
    status?: string;
    message?: string;

    user?: User;
}
