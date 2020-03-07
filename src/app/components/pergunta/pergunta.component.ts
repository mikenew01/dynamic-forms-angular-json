import {Component, Input, OnInit} from '@angular/core';
import {Field} from "../../model/field.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.scss']
})
export class PerguntaComponent implements OnInit {

  @Input()
  pergunta: Field<any>;

  @Input()
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  private hasErros(controlName: string, errorName: string): any {
    return this.form.controls[controlName].hasError(errorName);
  }

}
