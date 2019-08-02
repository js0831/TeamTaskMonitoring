import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionComponent } from './task-action.component';
import { NzDropDownModule, NzButtonModule, NzDividerModule, NzIconModule, NzModalService, NzModalControlService } from 'ng-zorro-antd';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { TaskService } from '../task.service';
import { of } from 'rxjs';

describe('TaskActionComponent', () => {
  let component: TaskActionComponent;
  let fixture: ComponentFixture<TaskActionComponent>;
  let taskService: TaskService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskActionComponent ],
      imports: [
        HttpClientTestingModule,
        NzDropDownModule,
        NzButtonModule,
        NzDividerModule,
        NzIconModule
      ],
      providers: [
        {
          provide: Store
        },
        NzModalService,
        NzModalControlService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskActionComponent);
    component = fixture.componentInstance;
    taskService = TestBed.get(TaskService);

    spyOn(taskService, 'storeSelectTask').and.returnValue(of({
      action: 'TASK_SELECT',
      selectedTask: {
        _id: '1',
        title: 'a',
        description: 'a',
        status: 0,
        date: new Date()
      }
    }));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the current status of task on the status selection', () => {
    expect(false).toBeTruthy();
  });

  it('should call the correct function base on the selected action', () => {
    expect(false).toBeTruthy();
  });

  it('should call the correct function base on the selected status', () => {
    expect(false).toBeTruthy();
  });

});
