import { Component, OnInit } from '@angular/core';
import { DateSelectionService } from './date-selection.service';

@Component({
  selector: 'app-date-selection',
  templateUrl: './date-selection.component.html',
  styleUrls: ['./date-selection.component.scss']
})
export class DateSelectionComponent implements OnInit {

  date: any;
  dateFormat = 'MMMM, d, yyyy';

  constructor(
    private dateSectionService: DateSelectionService
  ) { }

  ngOnInit() {
    this.date = new Date();
    this.dateSectionService.storeChangeDate(this.date);
  }

  datePickerSelect() {
    setTimeout(() => {
      this.dateSectionService.storeChangeDate(this.date);
    });
  }

  changeDate(inc: number) {
    const newDate = new Date(this.date);
    this.date = new Date(newDate.setDate(newDate.getDate() + inc));
    this.dateSectionService.storeChangeDate(this.date);
  }
}
