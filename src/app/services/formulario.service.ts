import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Field} from "../model/field.model";

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() {
  }

  toFormGroup(perguntas: Field<any>[]) {
    let group: any = {};

    perguntas.forEach(obj => {
      group[obj.key] = new FormControl(obj.value || '', this.toValidation(obj.validations) || []);
    });

    return new FormGroup(group);
  }

  private toValidation(validationObject: { validation: string, value?: any }[] = []): any {
    return validationObject.map(validation => {
      switch (validation.validation) {
        case 'min':
          return Validators.min(validation.value as number);
        case 'max':
          return Validators.max(validation.value as number);
        case 'required':
          return Validators.required;
        case 'email':
          return Validators.email;
        case 'minLength':
          return Validators.minLength(validation.value as number);
        case 'maxLength':
          return Validators.maxLength(validation.value as number);
      }
    });
  }

}
