import { TaskStatus } from './task-status.enum';

export interface Task {
    _id?: string;
    user?: string;
    title: string;
    description: string;
    status: TaskStatus;
    date?: string;
}
