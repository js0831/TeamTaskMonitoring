import { ErrorHandler, Injectable, Injector} from '@angular/core';
import {
    HttpErrorResponse
} from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    public message: NzMessageService;
    constructor(
        private injector: Injector
    ) {
        this.message = this.message || this.injector.get(NzMessageService);
    }
    handleError(error: Error) {
        // Do whatever you like with the error (send it to the server?)
        // And log it to the console
        // console.error('It happens: ', error);

        let message;
        if (error instanceof HttpErrorResponse) {
            if (!navigator.onLine) {
                console.log('no internet');
                message = 'No Internet Connection';
            } else {
                message = `${error.status} ${error.error.message}`;
                console.log(error);
            }
        } else {
            console.log(error);
            console.log('CLIENT ERROR');
            message = 'Client error';
        }

        this.message.create('error', message);
        setTimeout( x => { this.injector.get(Router).navigate(['/']); }, 2000);
    }
}
