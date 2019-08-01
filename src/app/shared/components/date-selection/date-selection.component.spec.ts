import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSelectionComponent } from './date-selection.component';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule, DateHelperService } from 'ng-zorro-antd';
import { Store } from '@ngrx/store';
import { DateSelectionService } from './date-selection.service';

describe('DateSelectionComponent', () => {
  let component: DateSelectionComponent;
  let fixture: ComponentFixture<DateSelectionComponent>;
  let dateSelectionService: DateSelectionService;
  let dom: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSelectionComponent ],
      imports: [
        FormsModule,
        NzDatePickerModule
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
    fixture = TestBed.createComponent(DateSelectionComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    dateSelectionService = TestBed.get(DateSelectionService);

    spyOn(dateSelectionService, 'storeChangeDate');

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
