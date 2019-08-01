import { Injectable } from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { DateChanged } from './state/date-selection.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateSelectionService {

  constructor(
    private store: Store<AppState>
  ) { }


  storeChangeDate(date: string) {
    this.store.dispatch(new DateChanged(date));
  }

  storeSelectDate(): Observable<any> {
    return this.store.select('date');
  }
}
