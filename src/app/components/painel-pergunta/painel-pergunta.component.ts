import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PainelPergunta} from "../../model/painel-pergunta.model";
import {FormGroup} from "@angular/forms";

export interface PerguntaCount {
  total: number;
  atual: number;
}

@Component({
  selector: 'app-painel-pergunta',
  templateUrl: './painel-pergunta.component.html',
  styleUrls: ['./painel-pergunta.component.scss']
})
export class PainelPerguntaComponent implements OnInit {

  panelOpenState = false;

  perguntaCount: PerguntaCount;

  @Input()
  painelPergunta: PainelPergunta;

  @Input()
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.getValues();
  }

  getValues() {
    const registros = Object.keys(this.form.controls);
    let atual = 0;

    registros.forEach(r => {
      const value = this.form.controls[r].value;

      if(value !== '' && value !== undefined && value !== null)
        atual++;
    });

    this.perguntaCount = {
      total: registros.length,
      atual: atual
    };
  }

  change(changes: any): void {
    this.getValues();
  }

  getClass() {
    if(this.perguntaCount.atual === 0)
      return '';

    return this.perguntaCount.atual === this.perguntaCount.total ? 'valid' : 'invalid';
  }

}
