import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from './user.actions';
import { map, switchMap, catchError} from 'rxjs/operators';
import { Observable , of } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable()
export class UserEffects {


  constructor(
      private actions$: Actions,
      private loginService: LoginService
    ) {}

    @Effect() userLogin: Observable<Action> = this.actions$.pipe(
        ofType(actions.USER_LOGIN),
        switchMap((action: actions.UserLogin) => {
            return this.loginService.authenticateUser(action.payload).pipe(
                map((result) => {
                    return new actions.UserLoginFinish(result);
                })
            );
        })
    );

}
