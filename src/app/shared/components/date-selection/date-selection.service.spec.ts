import { TestBed } from '@angular/core/testing';

import { DateSelectionService } from './date-selection.service';
import { Store } from '@ngrx/store';

describe('DateSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: Store
      }
    ]
  }));

  it('should be created', () => {
    const service: DateSelectionService = TestBed.get(DateSelectionService);
    expect(service).toBeTruthy();
  });
});
