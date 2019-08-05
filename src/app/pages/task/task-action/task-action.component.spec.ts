import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { TaskActionComponent } from './task-action.component';
import { NzDropDownModule, NzButtonModule, NzDividerModule, NzIconModule, NzModalService, NzModalControlService } from 'ng-zorro-antd';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { TaskService } from '../task.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TaskActionComponent', () => {
  let component: TaskActionComponent;
  let fixture: ComponentFixture<TaskActionComponent>;
  let taskService: TaskService;
  let modalService: NzModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskActionComponent ],
      imports: [
        HttpClientTestingModule,
        NzDropDownModule,
        NzButtonModule,
        NzDividerModule,
        NzIconModule,
        BrowserAnimationsModule
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
    modalService = TestBed.get(NzModalService);

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

    spyOn(modalService, 'confirm');
    spyOn(taskService, 'callTaskEvent');
    spyOn(taskService, 'storeUpdateUserTask');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the confirmation popup on deleting task', () => {
    component.action('delete');
    expect(modalService.confirm).toHaveBeenCalled();
  });

  it('should call the taskservice event method when selected action type is not delete', () => {
    component.action('view');
    expect(taskService.callTaskEvent).toHaveBeenCalled();
    component.action('edit');
    expect(taskService.callTaskEvent).toHaveBeenCalled();
  });

  it('should call storeUpdateUserTask when updateStatus is called', () => {
    component.updateStatus(1);
    expect(taskService.storeUpdateUserTask).toHaveBeenCalled();
  });

});
