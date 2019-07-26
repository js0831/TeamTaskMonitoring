import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../user.interface';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
    this.form = fb.group({
      firstname: [null, Validators.required ],
      lastname: [null, Validators.required ],
      username: [null, Validators.required ],
      password: [ null, Validators.required],
      confirmPassword: [ null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm() {
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
      }
    });
  }

  cancel() {
    this.router.navigate(['login']);
  }
}
