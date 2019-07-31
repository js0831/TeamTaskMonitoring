import { Injectable } from '@angular/core';
import { Credential } from './credential.interface';
import { HttpClient } from '@angular/common/http';
import { AppState } from 'src/app/shared/app.state';
import { Store } from '@ngrx/store';
import * as actions from './state/user.actions';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { User } from '../registration/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  static getCurrentUser(): User {
    return LocalStorageService.get('user') || {};
  }

  selectUser(): Observable<any> {
    return this.store.select('user');
  }

  login(credential: Credential) {
    this.store.dispatch(new actions.UserLogin({
      username: credential.username,
      password: credential.password
    }));
  }

  logout() {
    this.store.dispatch(new actions.UserLogout());
  }

  isAuthenticated() {
    return new Promise(
        (resolve, reject) => {
            this.selectUser().subscribe((state: any) => {
                resolve(state.user !== undefined);
            });
        }
    );
  }

  authenticateUser(credential: Credential) {
    return this.http.post('user/login', credential);
  }
}
