import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionComponent } from './task-action.component';
import { NzDropDownModule, NzButtonModule, NzDividerModule, NzIconModule } from 'ng-zorro-antd';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';

describe('TaskActionComponent', () => {
  let component: TaskActionComponent;
  let fixture: ComponentFixture<TaskActionComponent>;

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
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the current status of task on the status selection', () => {
    expect(false).toBeTruthy();
  });
});
