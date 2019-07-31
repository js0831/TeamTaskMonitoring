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
  NzListModule, 
  NzDatePickerModule,
  NzFormModule,
  NzInputModule,
  NzModalModule,
  NzSpinComponent,
  NzSpinModule,
  NzIconDirective,
  NzIconModule} from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskDateSelectionComponent } from '../task-date-selection/task-date-selection.component';
import { FormsModule } from '@angular/forms';
import { TaskActionComponent } from '../task-action/task-action.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskService } from '../task.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

fdescribe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let loginService: LoginService;
  let pageService: PageService;
  let taskService: TaskService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskComponent,
        NavigationComponent,
        PageComponent,
        NzBadgeComponent,
        TaskDateSelectionComponent,
        TaskActionComponent,
        TaskFormComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        NzTabsModule,
        NzEmptyModule,
        NzAvatarModule,
        NzAddOnModule,
        NzListModule,
        BrowserAnimationsModule,
        NzDatePickerModule,
        FormsModule,
        NzFormModule,
        NzInputModule,
        NzModalModule,
        NzIconModule,
        BrowserDynamicTestingModule
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
    taskService = TestBed.get(TaskService);

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
    spyOn(taskService, 'loadUserTask');
    spyOn(taskService, 'selectTask').and.returnValue(of(
      {
        action: 'TASK_LOAD_FINISH',
        status: 'ok',
        message: 'success',
        task: [
          {
            _id: '5d4123a23d0f543334636b4f',
            user: '5d3ab6b1ec5c10a9b85a362b',
            title: 'test',
            description: 'test desc',
            status: '0',
            date: '2019-07-31T05:14:10.750Z'
          },
          {
            _id: '5d412792584359a8bc16305d',
            user: '5d3ab6b1ec5c10a9b85a362b',
            title: 'test',
            description: 'test desc',
            status: '0',
            date: '2019-07-31T05:30:58.198Z'
          },
          {
            _id: '5d412c42e64a289aa4bdf628',
            user: '5d3ab6b1ec5c10a9b85a362b',
            title: '1 test',
            description: 'test desc',
            status: '1',
            date: '2019-07-31T05:50:58.043Z'
          },
          {
            _id: '5d412c47e64a289aa4bdf629',
            user: '5d3ab6b1ec5c10a9b85a362b',
            title: '2 test',
            description: 'test desc',
            status: '2',
            date: '2019-07-31T05:51:03.686Z'
          },
          {
            _id: '5d412c4be64a289aa4bdf62a',
            user: '5d3ab6b1ec5c10a9b85a362b',
            title: '3 test',
            description: 'test desc',
            status: '3',
            date: '2019-07-31T05:51:07.719Z'
          }
        ]
      }
    ));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should put the correct task on expected tab location base on task status', () => {
    expect(component.userTask[0].data.length).toBe(2);
    expect(component.userTask[1].data.length).toBe(1);
    expect(component.userTask[2].data.length).toBe(1);
    expect(component.userTask[3].data.length).toBe(1);
  });

  it('should show the correct count of task base on the status', () => {
    const dom = fixture.nativeElement;
    const badges = dom.querySelectorAll('nz-badge');
    expect(badges[0].querySelector('.current').innerText).toBe('2');
    expect(badges[1].querySelector('.current').innerText).toBe('1');
    expect(badges[2].querySelector('.current').innerText).toBe('1');
    expect(badges[3].querySelector('.current').innerText).toBe('1');
  });

  it('should update the view when new task is added', () => {
    expect(false).toBeTruthy();
  });

  // it('should move the task to on going tab when an todo task is change status to todo', () => {
  //   expect(false).toBeTruthy();
  // });

  // it('should move the task to done tab when an on going task is change status done', () => {
  //   expect(false).toBeTruthy();
  // });

  // it('should move the task to onhold tab when an task is change status onhold', () => {
  //   expect(false).toBeTruthy();
  // });

  // it('should move the task to todo tab when an task is change status todo', () => {
  //   expect(false).toBeTruthy();
  // });



  // it('should update the view when the task is deleted', () => {
  //   expect(false).toBeTruthy();
  // });

  // it('should update the view when new task is added', () => {
  //   expect(false).toBeTruthy();
  // });

  // it('should update the view when specifi task is updated', () => {
  //   expect(false).toBeTruthy();
  // });

  // it('should show the empty data when specific tab is empty', () => {
  //   expect(false).toBeTruthy();
  // });
});
