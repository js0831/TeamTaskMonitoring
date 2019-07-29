import { TestBed, async } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });
});
