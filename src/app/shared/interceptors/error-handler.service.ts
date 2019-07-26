import { ErrorHandler, Injectable} from '@angular/core';
import {
    HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    handleError(error: Error) {
        // Do whatever you like with the error (send it to the server?)
        // And log it to the console
        // console.error('It happens: ', error);
        if (error instanceof HttpErrorResponse) {
        if (!navigator.onLine) {
            console.log('no internet');
        } else {
            console.log(error.status);
            console.log(error.message);
        }

        } else {
            console.log(error);
            console.log('CLIENT ERROR');
        }
    }
}
