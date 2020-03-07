import {Field} from "./field.model";

export class PainelPergunta {
  titulo: string;
  perguntas: Field<any>[];
  descricao: string;

  constructor(options?: { perguntas: Field<any>[]; titulo: string, descricao: string }) {
    this.titulo = options.titulo;
    this.perguntas = options.perguntas;
    this.descricao = options.descricao;
  }
}
