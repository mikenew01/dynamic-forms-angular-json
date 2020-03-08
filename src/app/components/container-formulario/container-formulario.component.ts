import {Component} from '@angular/core';
import {PainelPergunta} from "../../model/painel-pergunta.model";
import {FormularioService} from "../../services/formulario.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-container-formulario',
  templateUrl: './container-formulario.component.html',
  styleUrls: ['./container-formulario.component.scss']
})
export class ContainerFormularioComponent {

  painelPerguntas$: Observable<any>;

  constructor(private formularioService: FormularioService) {
    this.painelPerguntas$ = this.formularioService.getPainelPerguntas();
  }

}
