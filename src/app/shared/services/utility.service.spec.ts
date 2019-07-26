import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service'; 
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

describe('UtilityService', () => {
  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ReactiveFormsModule
    ]
  }));

  it('should be created', () => {
    const service: UtilityService = TestBed.get(UtilityService);
    expect(service).toBeTruthy();
  });

  it('should mark form fields dirty', () => {
    const service: UtilityService = TestBed.get(UtilityService);
    const form: FormGroup = formBuilder.group({
      username: [null, Validators.required ],
      password: [ null, Validators.required]
    });
    service.markFormControlsDirty(form);
    expect(form.get('username').dirty).toBe(true);
    expect(form.get('password').dirty).toBe(true);
  });

});
