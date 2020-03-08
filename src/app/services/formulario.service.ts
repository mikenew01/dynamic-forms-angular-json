import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Field} from "../model/field.model";
import {PainelPergunta} from "../model/painel-pergunta.model";
import {of} from "rxjs";

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

  public getFormularioVeiculos() {
    const perguntas = [
      new PainelPergunta({
        titulo: 'Dados Básicos',
        descricao: 'Dados básicos da perícia',
        perguntas: [
          {
            value: '',
            key: 'identificadorRequisicao',
            label: 'Identificador da requisição',
            required: false,
            order: 0,
            controlType: 'text',
            type: 'text',
            placeholder: 'Identificador da requisição',
            validations: [
              {
                validation: 'maxLength',
                value: 15,
                message: 'O campo não pode ultrapassar 15 caracters.'
              }
            ],
            options: []
          },
          {
            value: '',
            key: 'nomePerito',
            label: 'Nome do perito',
            required: false,
            order: 1,
            controlType: 'text',
            type: 'text',
            placeholder: 'Nome do perito',
            validations: [
              {
                validation: 'maxLength',
                value: 50,
                message: 'O campo não pode ultrapassar 50 caracters.'
              }
            ],
            options: []
          },
          {
            value: '',
            key: 'local',
            label: 'Local',
            required: false,
            order: 2,
            type: 'inputMap',
            controlType: 'inputMap',
            placeholder: 'Local da perícia',
            validations: [],
            options: [],
            actionClick: () => console.log('ola'),
            icon: 'map'
          },
          {
            value: '',
            key: 'tipoVeiculo',
            label: 'Tipo do veículo',
            required: true,
            order: 3,
            controlType: 'dropdown',
            type: 'dropdown',
            placeholder: 'Selecione o tipo de veículo',
            validations: [
              {
                validation: 'required',
                value: true,
                message: 'O campo é obrigatório.'
              }
            ],
            options: [
              {
                key: "Automóvel",
                value: "AUTOMOVEL"
              },
              {
                key: "Bicicleta",
                value: "BICICLETA"
              },
              {
                key: "Caminhão",
                value: "CAMINHAO"
              },
              {
                key: "Caminhonete",
                value: "CAMINHONETE"
              },
              {
                key: "Camioneta",
                value: "CAMIONETA"
              },
              {
                key: "Ciclomotor",
                value: "CICLOMOTOR"
              },
              {
                key: "Micro-ônibus",
                value: "MICRO_ONIBUS"
              },
              {
                key: "Motocicleta",
                value: "MOTOCICLETA"
              },
              {
                key: "Motoneta",
                value: "MOTONETA"
              },
              {
                key: "Ônibus",
                value: "ONIBUS"
              },
              {
                key: "Quadriciclo",
                value: "QUADRICICLO"
              },
              {
                key: "Reboque ou semireboque",
                value: "REBOQUE_OU_SEMIREBOQUE"
              },
              {
                key: "Triciclo",
                value: "TRICICLO"
              },
              {
                key: "Utilitário",
                value: "UTILITARIO"
              },
              {
                key: "Outros",
                value: "OUTROS"
              }
            ]
          },
          {
            value: '',
            key: 'dataDeSolicitacao',
            label: 'Data da solicitação',
            required: false,
            order: 4,
            type: 'datePicker',
            controlType: 'datePicker',
            placeholder: 'Data da solicitação',
            validations: [],
            options: []
          },
          {
            value: '',
            key: 'dataInicioDoAtendimento',
            label: 'Data de início de atendimento',
            required: false,
            order: 5,
            type: 'datePicker',
            controlType: 'datePicker',
            placeholder: 'Data de início de atendimento',
            validations: [],
            options: []
          },
          {
            value: '',
            key: 'horaInicioDoAtendimento',
            label: 'Hora de início do atendimento',
            required: false,
            order: 6,
            type: 'time',
            controlType: 'time',
            placeholder: 'Hora de início do atendimento',
            validations: [],
            options: []
          },
          {
            value: '',
            key: 'dataDoDeslocamento',
            label: 'Data do deslocamento',
            required: false,
            order: 7,
            type: 'datePicker',
            controlType: 'datePicker',
            placeholder: 'Data do deslocamento',
            validations: [],
            options: []
          },
          {
            value: '',
            key: 'horaDoDeslocamento',
            label: 'Hora do deslocamento',
            required: false,
            order: 8,
            type: 'time',
            controlType: 'time',
            placeholder: 'Hora do deslocamento',
            validations: [],
            options: []
          },

          {
            value: '',
            key: 'sexo',
            label: 'Sexo',
            required: false,
            order: 10,
            controlType: 'radio',
            type: 'radio',
            placeholder: 'Opções',
            validations: [],
            options: [
              {
                key: 'masculino',
                value: 'Masculino'
              },
              {
                key: 'mulher',
                value: 'mulher'
              }
            ]
          }
        ]
      })
    ];

    return of(perguntas);
  }

}
