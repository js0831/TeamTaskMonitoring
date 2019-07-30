import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../login.service';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  subs: Subscription;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private utilityService: UtilityService,
    private router: Router,
    private message: NzMessageService
  ) {

    this.form = fb.group({
      username: [null, Validators.required ],
      password: [ null, Validators.required]
    });

  }

  ngOnInit() {

    this.subs = this.loginService.selectUser().subscribe( (s: any) => {
      if (s.action === 'USER_LOGIN_FINISH') {
        if (s.status === 'failed') {
          this.message.create('error', s.message);
        } else {
          this.router.navigate(['task']);
        }
      }
    });

  }

  submitLogin() {
    this.utilityService.markFormControlsDirty(this.form);
    if (this.form.invalid) {return; }
    this.loginService.login({
      username: this.form.value.username,
      password: this.form.value.password
    });
  }

  register() {
    this.router.navigate(['register']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
