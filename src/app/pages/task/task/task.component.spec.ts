import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { NavigationComponent } from 'src/app/shared/components/navigation/navigation.component';
import { PageComponent } from 'src/app/shared/components/page/page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../../login/login.service';
import { of } from 'rxjs';
import { PageService } from 'src/app/shared/components/page/page.service';
import {
  NzBadgeComponent,
  NzTabsModule,
  NzEmptyModule,
  NzAvatarModule,
  NzAddOnModule,
  NzListModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskDateSelectionComponent } from '../task-date-selection/task-date-selection.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let loginService: LoginService;
  let pageService: PageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskComponent,
        NavigationComponent,
        PageComponent,
        NzBadgeComponent,
        TaskDateSelectionComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        NzTabsModule,
        NzEmptyModule,
        NzAvatarModule,
        NzAddOnModule,
        NzListModule,
        BrowserAnimationsModule
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
    pageService = TestBed.get(PageService);

    spyOn(loginService, 'selectUser').and.returnValue(of({
      firstname: 'Jener',
      lastname: 'Sigua',
      username: 'siguajener'
    }));

    spyOn(pageService, 'selectPage').and.returnValue(of({
      page: {
        history: [],
        currentPage: {
          id: 'task',
          path: '/task'
        }
      }
    }));

    spyOn(pageService, 'pageChanged');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
