import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NzInputModule,
  NzFormModule, NzMessageService,
  NzAddOnModule,
  NzMessageComponent,
  NzMessageContainerComponent
} from 'ng-zorro-antd';
import { PageComponent } from 'src/app/shared/components/page/page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Overlay } from '@angular/cdk/overlay';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RegisterService } from '../register.service';
import { of } from 'rxjs';
import { Routes, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  template: `<div>mock</div>`
})
export class MockComponent {
}
export const routes: Routes = [
  {path: 'login', component: MockComponent},
];

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let dom: Element;
  let registerService: RegisterService;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterComponent,
        PageComponent,
        NzMessageComponent,
        NzMessageContainerComponent,
        MockComponent
      ],
      imports: [
        BrowserDynamicTestingModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        NzInputModule,
        NzFormModule,
        NzAddOnModule
      ],
      providers: [
        NzMessageService,
        Overlay
      ]
    }).overrideModule(
      BrowserDynamicTestingModule,
      {
        set: {
          entryComponents: [
            NzMessageComponent,
            NzMessageContainerComponent
          ]
        }
      }
    )
    .compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    registerService = TestBed.get(RegisterService);

    spyOn(registerService, 'registerUser').and.returnValue(of({
      status: 'ok'
    }));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate password confirmation if not match to password field', () => {
    component.form.get('firstname').patchValue('firstname');
    component.form.get('lastname').patchValue('lastname');
    component.form.get('username').patchValue('username');
    component.form.get('password').patchValue('password');
    component.form.get('confirmPassword').patchValue('confirmPassword');
    expect(component.form.invalid).toBeTruthy();
    component.form.get('confirmPassword').patchValue('password');
    expect(component.form.valid).toBeTruthy();
  });

  it('should validate username field minimum characters length to 5', () => {
    const username = component.form.get('username');
    username.patchValue('12345');
    expect(username.valid).toBeTruthy();
    username.patchValue('123456');
    expect(username.valid).toBeTruthy();
    username.patchValue('1234');
    expect(username.invalid).toBeTruthy();
  });

  it('should validate password field minimum characters length to 5', () => {
    const password = component.form.get('password');
    password.patchValue('12345');
    expect(password.valid).toBeTruthy();
    password.patchValue('123456');
    expect(password.valid).toBeTruthy();
    password.patchValue('1234');
    expect(password.invalid).toBeTruthy();
  });

  it('should reset the form upon successful registration', () => {
      component.form.patchValue({
        firstname: 'Jener',
        lastname: 'Sigua',
        username: 'siguajener',
        password: '12345',
        confirmPassword: '12345'
      });
      component.submitForm();
      fixture.detectChanges();
      expect(component.form.get('firstname').value).toBe(null);
  });

  it('should redirect to login page upon click cancel link', fakeAsync(() => {
    component.cancel();
    tick();
    expect(location.path()).toBe('/login');
  }));

});
