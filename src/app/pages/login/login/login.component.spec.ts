import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzMessageService,
  NzMessageContainerComponent,
  NzMessageComponent,
  NzAddOnModule
} from 'ng-zorro-antd';
import { PageComponent } from 'src/app/shared/components/page/page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Store } from '@ngrx/store';
import { LoginService } from '../login.service';
import { of } from 'rxjs';
import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';
import {Location} from '@angular/common';
import { PageService } from 'src/app/shared/components/page/page.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  template: `<div>mock</div>`
})
class MockComponent {
}
const routes: Routes = [
  {path: 'register', component: MockComponent},
  {path: 'task', component: MockComponent},
];

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let dom: Element;
  let loginService: LoginService;
  let pageService: PageService;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        NzButtonModule,
        NzFormModule,
        NzInputModule,
        NzAddOnModule,
        BrowserAnimationsModule
      ],
      declarations: [
        LoginComponent,
        PageComponent,
        NzMessageComponent,
        NzMessageContainerComponent,
        MockComponent
      ],
      providers: [
        LoginService,
        NzMessageService,
        Overlay,
        {
          provide: Store, useValue: {}
        },
      ]
    })
    .overrideModule(
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    loginService = TestBed.get(LoginService);
    pageService =  TestBed.get(PageService);

    spyOn(loginService, 'selectUser').and.returnValue(of({
      status: 'ok',
      action: 'USER_LOGIN_FINISH',
      user: {
        firstname: 'Jener',
        lastname: 'Sigua',
        username: 'siguajener'
      }
    }));
    spyOn(loginService, 'login');
    spyOn(pageService, 'pageChanged');


    fixture.detectChanges();
  });

  it('should create the login', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should validate form', () => {
    const username = dom.querySelector('#username');
    const password = dom.querySelector('#password');

    expect(username.classList.contains('ng-invalid')).toBe(true);
    expect(password.classList.contains('ng-invalid')).toBe(true);

    component.form.get('username').patchValue('test');
    component.form.get('password').patchValue('test');
    fixture.detectChanges();
    expect(username.classList.contains('ng-invalid')).toBe(false);
    expect(password.classList.contains('ng-invalid')).toBe(false);
  });

  it('should make all fields to dirty on submit', () => {
    component.submitLogin();
    fixture.detectChanges();
    expect(component.form.get('username').dirty).toBe(true);
    expect(component.form.get('password').dirty).toBe(true);
  });

  it('should redirect to registration page upon click register link', fakeAsync(() => {
    component.register();
    tick();
    expect(location.path()).toBe('/register');
  }));

  it('should redirect task page when login is successfull', fakeAsync(() => {
    component.ngOnInit();
    component.form.patchValue({
      username: 'sigujener',
      password: '12312312'
    });
    fixture.detectChanges();
    component.submitLogin();
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/task');
  }));

});
