import { Injectable } from '@angular/core';
import { Credential } from './credential.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  authenticateUser(credential: Credential) {
    return this.http.post('user/login', credential);
  }
}
