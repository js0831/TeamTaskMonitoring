import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { NavigationComponent } from 'src/app/shared/components/navigation/navigation.component';
import { PageComponent } from 'src/app/shared/components/page/page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../../login/login.service';
import { of } from 'rxjs';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let loginService: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskComponent,
        NavigationComponent,
        PageComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: Store
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    loginService = TestBed.get(LoginService);

    spyOn(loginService, 'selectUser').and.returnValue(of({
      firstname: 'Jener',
      lastname: 'Sigua',
      username: 'siguajener'
    }));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
