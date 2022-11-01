import { PostagemModel } from './postagem-model';

export class UsuarioModel {

  constructor(
    private _id: number = 0,
    private _nomeCompleto: string = '',
    private _dataAniversario: string = '',
    private _descricaoBio: string = '',
    private _urlFoto: string = '',
    private _email: string = '',
    private _senha: string = '',
    private _confirmaSenha: string = '',
    private _numeroWhatsapp: string = '',
    private _visibilidadeDoPerfil: string = '',
    private _contaCriadaEm: Date = new Date(),
    private _postagens: PostagemModel[] = [],
    private _interesses: string[] = [''],
    private _educacao: string[] = [''],
    private _enderecos: string[] = [],
  ) { }

  get id() { return this._id; }
  get nomeCompleto() { return this._nomeCompleto; }
  get dataAniversario() { return this._dataAniversario; }
  get descricaoBio() { return this._descricaoBio; }
  get urlFoto() { return this._urlFoto; }
  get email() { return this._email; }
  get senha() { return this._senha; }
  get confirmaSenha() { return this._confirmaSenha; }
  get numeroWhatsapp() { return this._numeroWhatsapp; }
  get visibilidadeDoPerfil() { return this._visibilidadeDoPerfil; }
  get contaCriadaEm() { return this._contaCriadaEm; }
  get postagens() { return this._postagens; }
  get interesses() { return this._interesses; }
  get educacao() { return this._educacao; }
  get enderecos() { return this._enderecos; }

  set id(value: number) { this._id = value; }
  set nomeCompleto(value: string) { this._nomeCompleto = value; }
  set dataAniversario(value: string) { this._dataAniversario = value; }
  set descricaoBio(value: string) { this._descricaoBio = value; }
  set urlFoto(value: string) { this._urlFoto = value; }
  set email(value: string) { this._email = value; }
  set senha(value: string) { this._senha = value; }
  set confirmaSenha(value: string) { this._confirmaSenha = value; }
  set numeroWhatsapp(value: string) { this._numeroWhatsapp = value; }
  set visibilidade(value: string) { this._visibilidadeDoPerfil = value; }
  set contaCriadaEm(value: Date) { this._contaCriadaEm = value; }
  set postagem(value: PostagemModel) { this._postagens?.push(value); }
  set interesses(value: string[]) { this._interesses = value; }
  set educacao(value: string[]) { this._educacao = value; }
  set enderecos(value: string[]) { this._enderecos = value; }


  toMap(data: string): Object {
    return {
      id: this._id,
      dataAniversario: data.split(' ')[0],
      descricaoBio: this._descricaoBio,
      nomeCompleto: this._nomeCompleto,
      urlFoto: this._urlFoto,
      email: this._email,
      senha: this._senha,
      numeroWhatsapp: this._numeroWhatsapp,
      seguindo: [],
      postagens: this._postagens,
      paginasCurtidas: [],
      paginasCriadas: [],
      interessesPessoais: this._interesses,
      enderecos: this._enderecos,
      educacao: this._educacao,
      visibilidadeDoPerfil: "visível",
      notificacoes: [],
    };
  }

}
