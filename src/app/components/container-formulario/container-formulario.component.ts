import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {PainelPergunta} from "../../model/painel-pergunta.model";
import {FormularioService} from "../../services/formulario.service";
import {Field} from "../../model/field.model";

@Component({
  selector: 'app-container-formulario',
  templateUrl: './container-formulario.component.html',
  styleUrls: ['./container-formulario.component.scss']
})
export class ContainerFormularioComponent implements OnInit {

  form: FormGroup;
  painelPerguntas: PainelPergunta[];

  constructor(private formularioService: FormularioService) {
  }

  ngOnInit(): void {
    this.painelPerguntas = [
      new PainelPergunta({
        titulo: 'Dados basicos',
        descricao: 'dados basicos',
        perguntas: [
          new Field({
            controlType: 'text',
            key: 'nome',
            label: 'Nome',
            type: 'text',
            placeholder: 'Ex: Maikon Canuto',
            order: 2,
            validations: [
              {validation: 'email', message: 'Campo inválido, precisa digitar e-mail'},
              {validation: 'minLength', value: 3, message: 'Necessário preencher o campo.'},
              {validation: 'maxLength', value: 4, message: 'Caracters máximos 2'},
            ]
          }),
          new Field({
            controlType: 'text',
            key: 'sobrenome',
            label: 'Sobrenome Completo',
            type: 'text',
            placeholder: 'Sobrenome',
            order: 1
          }),
        ]
      }),

      new PainelPergunta({
        titulo: 'Veiculos',
        descricao: 'Dados sobre veiculos',
        perguntas: [
          new Field({
            controlType: 'text',
            key: 'nomeVeiculo',
            label: 'Nome',
            type: 'text',
            placeholder: 'Veiculo',
            order: 1
          }),
        ]
      })
    ];

    let perguntasTmp = [];
    this.painelPerguntas.forEach(painelPergunta => painelPergunta.perguntas.forEach(pergunta => perguntasTmp.push(pergunta)));
    this.form = this.formularioService.toFormGroup(perguntasTmp);
  }

  onSubmit(value: any) {
    console.log('entrou', value);
  }

}
