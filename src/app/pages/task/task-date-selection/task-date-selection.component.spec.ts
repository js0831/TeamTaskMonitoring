import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDateSelectionComponent } from './task-date-selection.component';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd';

describe('TaskDateSelectionComponent', () => {
  let component: TaskDateSelectionComponent;
  let fixture: ComponentFixture<TaskDateSelectionComponent>;
  let dom: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDateSelectionComponent ],
      imports: [
        FormsModule,
        NzDatePickerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDateSelectionComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 day on date upon click right arrow', () => {
    const currentDate = component.date;
    const nextButton = dom.querySelector('.next-date');
    nextButton.click();
    const difference = component.date - currentDate;
    expect(difference).toBe(86400000);
  });

  it('should subtract 1 day on date upon click left arrow', () => {
    const currentDate = component.date;
    const nextButton = dom.querySelector('.previous-date');
    nextButton.click();
    const difference = currentDate - component.date;
    expect(difference).toBe(86400000);
  });

});
