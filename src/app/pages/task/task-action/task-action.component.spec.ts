import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionComponent } from './task-action.component';
import { NzDropDownModule, NzButtonModule, NzDividerModule } from 'ng-zorro-antd';

describe('TaskActionComponent', () => {
  let component: TaskActionComponent;
  let fixture: ComponentFixture<TaskActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskActionComponent ],
      imports: [
        NzDropDownModule,
        NzButtonModule,
        NzDividerModule
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
});
