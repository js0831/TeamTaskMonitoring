import { TestBed } from '@angular/core/testing';

import { LoadingService } from './Loading.service'; 
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

describe('LoadingService', () => { 

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
    ]
  }));

  it('should be created', () => {
    const service: LoadingService = TestBed.get(LoadingService);
    expect(service).toBeTruthy();
  });

  it('should be created a', () => {
    const service: LoadingService = TestBed.get(LoadingService);
    expect(service).toBeTruthy();
  });
});
