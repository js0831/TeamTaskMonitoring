import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from 'src/app/shared/app.state';
import { Store } from '@ngrx/store';
import * as actions from './state/page.actions';
import { Observable } from 'rxjs';
import { Page } from './page.interface';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  selectPage(): Observable<any> {
    return this.store.select('page');
  }

  pageChanged(page: Page) {
    this.store.dispatch(new actions.PageChanged(page));
  }

  clearPageData() {
    this.store.dispatch(new actions.PageClear());
  }
}
