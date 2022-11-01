import { PostagemModel } from './../models/postagem-model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UsuarioModel } from '../models/usuario-model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  private imagemSelecionada?: File | null;
  postagem: PostagemModel = new PostagemModel();
  private url = 'http://localhost:8080/postagem'

  constructor(
    private modalService: BsModalService,
    private httpClient: HttpClient,
    public modalRef: BsModalRef,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  closeModal(): void {
    this.modalRef.hide();
  }

  aoEscolherArquivo(event: any): void {
    this.imagemSelecionada = <File>event.target.files[0];
  }

  criarPostagem(): void {
    console.log('img:', this.imagemSelecionada?.name);

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.imagemSelecionada!, this.imagemSelecionada?.name);

    const usuario: UsuarioModel | null = this.usuarioService.buscarUsuarioDaSessao();
    if (usuario != null) {
      console.log("POSTS EDIT:", usuario.postagens);

      this.postagem.usuarioId = usuario.id;
      uploadImageData.append('idUsuario', usuario.id.toString());
      uploadImageData.append('descPostagem', this.postagem.descricao);
      console.log('DESC:', this.postagem.toString());
    }

    this.httpClient.post(
      this.url + '/save',
      uploadImageData,
    ).subscribe((resp) => {
      console.log("RESPONSE");

      this.usuarioService.buscarPostagens();
    });
  }

}
