import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-date-selection',
  templateUrl: './task-date-selection.component.html',
  styleUrls: ['./task-date-selection.component.scss']
})
export class TaskDateSelectionComponent implements OnInit {

  date: any;
  dateFormat = 'MMMM, d, yyyy';

  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }

  changeDate(inc: number) {
    const newDate = new Date(this.date);
    this.date = new Date(newDate.setDate(newDate.getDate() + inc));
  }
}
