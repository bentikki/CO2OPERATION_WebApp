// import { FormGroup, AbstractControl } from "@angular/forms";
// import { SignupService } from '../_services/signup.service'
// import { Observable, from, pipe, fromEvent } from 'rxjs';
// import { map, filter, tap } from 'rxjs/operators'


// // To validate password and confirm password
// export class ValidateEmailNotTaken {
//   static createValidator(signupService: SignupService) {
//     return (control: AbstractControl) => {
//       // return signupService.checkUsernameTaken(control.value).map(res => {

//       //   return res ? { emailTaken: true } : null;

//       // });
//       return signupService.checkUsernameTaken(control.value)
//         .pipe(map(res => {
//           return res ? { emailTaken: true } : null;
//         }))


//     };
//   }
// }




// import { Directive } from '@angular/core';
// import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';
// import { map } from 'rxjs/operators';
// import { SignupService } from '../_services/signup.service';

// export function uniqueUsernameValidator(signupService : SignupService): AsyncValidatorFn{
//   return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
//     return this.signupService.checkUsernameTaken(c.value).pipe(
//       map(resp => {
//         return resp ? {'uniqueUsername': true}: null;
//       })
//     )
//   }
// }


// @Directive({
//   selector: '[uniqueUsername]',
//   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernamceValidatorDirective, multi: true}]
// })

// export class UniqueUsernamceValidatorDirective implements AsyncValidator {
  
//   constructor(
//     private signupService : SignupService
//   ) 
//   {
//   }
  
//   validate(c: AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
//     return uniqueUsernameValidator(this.signupService)(c);
//   }
// }


import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, take, switchMapTo, tap, map } from 'rxjs/operators';
import { SignupService } from '../_services/signup.service';

export class ValidateUsername {

  static createValidator(service: SignupService) {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.valueChanges || control.pristine) {
        return of(null);
      } else {
        return control.valueChanges.pipe(
          debounceTime(300),
          distinctUntilChanged(),
          take(1),
          switchMapTo(service.checkUsernameTaken(control.value)),
          tap(() => control.markAsTouched()),
          map((data) => (data ? { userExist: true } : null))
        );
      }
    };
  }

}