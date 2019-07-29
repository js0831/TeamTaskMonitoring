import { Injectable } from '@angular/core';
import { Credential } from './credential.interface';
import { HttpClient } from '@angular/common/http';
import { AppState } from 'src/app/shared/app.state';
import { Store } from '@ngrx/store';
import * as actions from './state/user.actions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  selectUser() {
    return this.store.select('user');
  }

  login(credential: Credential) {
    this.store.dispatch(new actions.UserLogin({
      username: credential.username,
      password: credential.password
    }));
  }

  authenticateUser(credential: Credential) {
    return this.http.post('user/login', credential);
  }
}
