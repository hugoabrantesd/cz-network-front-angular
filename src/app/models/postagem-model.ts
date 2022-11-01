export class PostagemModel {

  constructor(
    private _id?: string,
    private _descricao: string = '',
    private _numeroCurtidas?: number,
    private _numeroCompartilhamentos?: number,
    private _comentarios?: string[],
    private _dataHoraPostagem?: string,
    private _urlImagemPost: string = '',
    private _usuarioId: number = 0,
  ) { }

  get id() { return this._id; }

  public get descricao() {
    return this._descricao;
  }
  get numeroCurtidas() { return this._numeroCurtidas; }
  get comentarios() { return this._comentarios; }
  get numeroCompartilhamentos() { return this._numeroCompartilhamentos; }
  get dataHoraPostagem() { return this._dataHoraPostagem; }
  get urlImagemPost() { return this._urlImagemPost; }
  get usuarioId() { return this._usuarioId; }

  set setId(value: string) {
    this._id = value;
  }
  public set descricao(value: string) {
    this._descricao = value;
  }
  set setNumeroCurtidas(value: number) {
    this._numeroCurtidas = value;
  }
  set setUrlFoto(value: string[]) {
    this._comentarios = value;
  }
  set setNumeroCompartilhamentos(value: number) {
    this._numeroCompartilhamentos = value;
  }
  set dataPostagem(value: string) {
    this._dataHoraPostagem = value;
  }
  set urlImagemPost(value: string) {
    this._urlImagemPost = value;
  }
  set usuarioId(value: number) {
    this._usuarioId = value;
  }

  toString(): string {
    return 'Id: ' + this.id;
  }

}
