import {Component, Input, OnInit} from '@angular/core';
import {PainelPergunta} from "../../model/painel-pergunta.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-painel-pergunta',
  templateUrl: './painel-pergunta.component.html',
  styleUrls: ['./painel-pergunta.component.scss']
})
export class PainelPerguntaComponent implements OnInit {

  panelOpenState = false;

  @Input()
  painelPergunta: PainelPergunta;

  @Input()
  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.getValues();
  }

  getValues() {
    let atual = 0;

    this.painelPergunta.perguntas.forEach(r => {
      const value = this.form.controls[r.key].value;

      if (value !== '' && value !== undefined && value !== null)
        atual++;
    });

    this.painelPergunta.atualPerguntas = atual;
  }

  change(changes: any): void {
    this.getValues();
  }

  getClass() {
    if (this.painelPergunta.atualPerguntas === 0)
      return '';

    return this.painelPergunta.atualPerguntas === this.painelPergunta.totalPerguntas ? 'valid' : 'invalid';
  }

}
