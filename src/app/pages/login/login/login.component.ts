import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../login.service';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { User } from '../../registration/user.interface';
import { RegisterService } from '../../registration/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private utilityService: UtilityService,
    private router: Router
  ) {

    this.form = fb.group({
      username: [null, Validators.required ],
      password: [ null, Validators.required]
    });

  }

  ngOnInit() {
  }

  submitLogin() {
    this.utilityService.markFormControlsDirty(this.form);
    if (this.form.invalid) {return; }
    this.loginService.authenticationUser({
      username: this.form.value.username,
      password: this.form.value.password
    }).subscribe( x => {
      console.log(x);
    });
  }

  register() {
    this.router.navigate(['register']);
  }
}
