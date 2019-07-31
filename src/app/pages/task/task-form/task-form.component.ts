import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Output() closed = new EventEmitter<boolean>();
  show = false;

  constructor() { }

  ngOnInit() {
    setTimeout( x => { this.show = true; }, 250);
  }

  handleCancel() {
    this.show = false;
    setTimeout( x => {
      this.closed.emit(true);
    }, 500);
  }
}
