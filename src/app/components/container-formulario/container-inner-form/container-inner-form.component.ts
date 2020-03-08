import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormularioService} from "../../../services/formulario.service";

@Component({
  selector: 'app-container-inner-form',
  templateUrl: './container-inner-form.component.html',
  styleUrls: ['./container-inner-form.component.scss']
})
export class ContainerInnerFormComponent implements OnInit {

  @Input() painelPerguntas: any;

  form: FormGroup;

  constructor(private formularioService: FormularioService) {
  }

  ngOnInit() {
    console.log('aqui', this.painelPerguntas);
    let perguntasTmp = [];
    this.painelPerguntas.forEach(painel => painel.perguntas.forEach(p => perguntasTmp.push(p)));
    this.form = this.formularioService.toFormGroup(perguntasTmp);
  }

  onSubmit(value: any) {
    console.log('value', value);
  }
}
