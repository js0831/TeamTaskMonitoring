import { Injectable } from '@angular/core';
import { Credential } from '../credential.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  authenticationUser(credential: Credential) {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
