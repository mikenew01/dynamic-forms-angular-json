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

  getQuestions() {
    let perguntas: Field<any>[] = [
      new Field({
        controlType: 'text',
        key: 'emailPessoa',
        value: 'maikoncanuto@gmail.com',
        label: 'E-mail',
        type: 'email',
        placeholder: 'maikoncanuto@gmail.com',
        validations: [
          {validation: 'email', message: 'Field inválido, precisa digitar e-mail'},
          {validation: 'minLength', value: 3, message: 'Necessário preencher o campo.'},
          {validation: 'maxLength', value: 4, message: 'Caracters máximos 2'},
        ],
        order: 2
      }),

      new Field({
        controlType: 'text',
        key: 'nome',
        label: 'Nome Completo',
        type: 'text',
        placeholder: 'Maikon Canuto',
        order: 1
      }),

      new Field({
        controlType: 'dropdown',
        key: 'sexo',
        label: 'Sexo',
        type: 'dropdown',
        placeholder: 'Selecione o Sexo',
        order: 3,
        options: [
          {key: 'Homem', value: 'M'},
          {key: 'Mulher', value: 'F'}
        ]
      }),
    ];

    return perguntas.sort((a, b) => a.order - b.order);
  }

}
