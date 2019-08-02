import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule, NzModalModule, NzInputModule } from 'ng-zorro-antd';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateSelectionService } from 'src/app/shared/components/date-selection/date-selection.service';
import { of, Subject } from 'rxjs';
import { TaskService } from '../task.service';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;
  let dateSelectionService: DateSelectionService;
  let taskService: TaskService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskFormComponent
      ],
      imports: [
        FormsModule,
        NzFormModule,
        NzModalModule,
        ReactiveFormsModule,
        NzInputModule,
        HttpClientTestingModule,
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
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    dateSelectionService = TestBed.get(DateSelectionService);
    taskService = TestBed.get(TaskService);

    spyOn(dateSelectionService, 'storeSelectDate').and.returnValue(of({
      date: new Date()
    }));

    spyOn(taskService, 'taskEvents').and.returnValue(new Subject<{action: string, data: string}>());
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

  it('should hide the save button on View mode', () => {
    expect(false).toBeTruthy();
  });

  it('should hide the form and show task info View mode', () => {
    expect(false).toBeTruthy();
  });

  it('should update the save button to update on edit mode', () => {
    expect(false).toBeTruthy();
  });

  it('should call the correct function on submitting the form base on current mode', () => {
    expect(false).toBeTruthy();
  });

  it('should show the correct title base on current mode', () => {
    expect(false).toBeTruthy();
  });
});
