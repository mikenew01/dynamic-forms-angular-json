import {Field} from "./field.model";

export class PainelPergunta {
  titulo: string;
  perguntas: Field<any>[];
  descricao: string;
  totalPerguntas?: number;
  atualPerguntas?: number;

  constructor(options?: { perguntas: Field<any>[]; titulo: string, descricao: string, totalPerguntas?: number, atualPerguntas?: number }) {
    this.titulo = options.titulo;
    this.perguntas = options.perguntas;
    this.descricao = options.descricao;
    this.totalPerguntas = options.totalPerguntas || 0;
    this.atualPerguntas = options.atualPerguntas || 0;
  }
}
