import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  markFormControlsDirty(form: FormGroup) {
    // tslint:disable-next-line: forin
    for (const i in form.controls) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }
  }

  getFormValidationErrors(f: FormGroup) {
    let errors = [];
    Object.keys(f.controls).forEach(key => {
        const controlErrors: ValidationErrors = f.get(key).errors;
        const value = f.get(key).value;
        if (typeof value === 'object' && value !== null) {
          const t = this.getFormValidationErrors((f.get(key) as FormGroup));
          if (t.length > 0 ) {
            errors = [...errors, ...t];
          }
        } else {
          if (controlErrors != null) {
            Object.keys(controlErrors).forEach(keyError => {
              errors.push({
                field: key,
                error: keyError
              });
            });
          }
        }
    });
    return errors;
  }
}
