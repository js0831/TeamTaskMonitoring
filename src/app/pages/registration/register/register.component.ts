import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../user.interface';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { MustMatch } from 'src/app/shared/validators/password-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private message: NzMessageService,
    private utitilyService: UtilityService
  ) {
    this.form = fb.group({
      firstname: [null, Validators.required ],
      lastname: [null, Validators.required ],
      username: [null, Validators.required ],
      password: [ null, Validators.required],
      confirmPassword: [ null, Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  ngOnInit() {
  }

  submitForm() {
    this.utitilyService.markFormControlsDirty(this.form);
    if (this.form.invalid) {
      const errors = this.utitilyService.getFormValidationErrors(this.form);
      const message = errors[0].error === 'mustMatch' ? 'Password not match' : 'Fields Required';
      this.message.create('error', message);
      return;
    }


    const value = this.form.value;
    const user: User = {
      firstname: value.firstname,
      lastname: value.lastname,
      username: value.username,
      password: value.password
    };

    this.registerService.registerUser(user).subscribe( (res: any) => {
      if (res.status === 'ok') {
        this.form.reset();
        this.message.create('success', res.message);
      } else {
        this.message.create('error', res.message);
      }
    });
  }

  cancel() {
    this.router.navigate(['login']);
  }
}
