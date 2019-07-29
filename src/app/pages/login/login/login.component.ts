import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../login.service';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { User } from '../../registration/user.interface';
import { RegisterService } from '../../registration/register.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/app.state';
import * as actions from '../state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private utilityService: UtilityService,
    private router: Router,
    private message: NzMessageService,
    private store: Store<AppState>
  ) {

    this.form = fb.group({
      username: [null, Validators.required ],
      password: [ null, Validators.required]
    });

  }

  ngOnInit() {

    this.store.select('user').subscribe( (s: any) => {
      if (s.action === 'USER_LOGIN_FINISH') {
        if (s.status === 'failed') {
          this.message.create('error', s.message);
        } else {
          console.log(s);
        }
      }
    });

  }

  submitLogin() {
    this.utilityService.markFormControlsDirty(this.form);
    if (this.form.invalid) {return; }
    this.store.dispatch(new actions.UserLogin({
      username: this.form.value.username,
      password: this.form.value.password
    }));
  }

  register() {
    this.router.navigate(['register']);
  }

  ngOnDestroy(): void {

  }
}
