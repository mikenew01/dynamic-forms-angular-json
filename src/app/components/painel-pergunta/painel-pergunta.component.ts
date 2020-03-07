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

  constructor() { }

  ngOnInit(): void {
  }

}
