import { User } from '../pages/registration/user.interface';
import { Page } from './components/page/page.interface';
import { Task } from '../pages/task/task.interface';

export interface AppState {

    action?: string;
    status?: string;
    message?: string;

    user?: User;
    task?: Task[];
    selectedTask?: Task;
    date?: string;
    page?: {
        history?: Page[],
        current?: Page
    };
}
