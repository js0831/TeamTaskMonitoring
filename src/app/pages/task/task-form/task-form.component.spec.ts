import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule, NzModalModule, NzInputModule } from 'ng-zorro-antd';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
