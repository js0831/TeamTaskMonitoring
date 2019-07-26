import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private subject = new Subject<any>();

  constructor() { }

  start() {
    this.subject.next('LOADING_START');
  }

  end() {
    this.subject.next('LOADING_END');
  }

  watch() {
    return this.subject.asObservable();
  }

}
