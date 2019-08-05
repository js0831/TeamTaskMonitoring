import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule, NzModalModule, NzInputModule, NzDatePickerModule, NzModalComponent } from 'ng-zorro-antd';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateSelectionService } from 'src/app/shared/components/date-selection/date-selection.service';
import { of, Subject } from 'rxjs';
import { TaskService } from '../task.service';
import { DebugElement } from '@angular/core';
import { By } from 'protractor';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

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
        BrowserAnimationsModule,
        NzDatePickerModule,
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
    component.show = true;
    component.formType = 'ADD_TASK';
    fixture.detectChanges();
    expect(fixture.nativeElement.parentNode.querySelector('.submit-task-form')).toBeTruthy();
    component.formType = 'VIEW_TASK';
    fixture.detectChanges();
    expect(fixture.nativeElement.parentNode.querySelector('.submit-task-form')).toBeFalsy();
  });

  it('should hide the form and show task info View mode', () => {
    component.show = true;
    component.formType = 'ADD_TASK';
    fixture.detectChanges();
    expect(fixture.nativeElement.parentNode.querySelector('.task-view')).toBeFalsy();
    component.formType = 'VIEW_TASK';
    fixture.detectChanges();
    expect(fixture.nativeElement.parentNode.querySelector('.task-view')).toBeTruthy();
  });

  it('should update the save button to update on edit mode', () => {
    component.show = true;
    component.formType = 'ADD_TASK';
    fixture.detectChanges();
    expect(fixture.nativeElement.parentNode.querySelector('.submit-task-form').innerHTML).toBe('SAVE');
    component.formType = 'EDIT_TASK';
    fixture.detectChanges();
    expect(fixture.nativeElement.parentNode.querySelector('.submit-task-form').innerHTML).toBe('UPDATE');
  });

  // it('should call the correct function on submitting the form base on current mode', () => {
  //   expect(false).toBeTruthy();
  // });

  // it('should show the correct title base on current mode', () => {
  //   expect(false).toBeTruthy();
  // });
});
