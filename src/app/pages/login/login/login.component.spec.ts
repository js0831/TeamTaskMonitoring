import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule, NzFormModule, NzInputModule } from 'ng-zorro-antd';
import { PageComponent } from 'src/app/shared/components/page/page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from 'protractor';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let dom: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzFormModule,
        NzInputModule
      ],
      declarations: [
        LoginComponent,
        PageComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
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
});
