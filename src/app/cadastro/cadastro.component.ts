import { UsuarioService } from './../services/usuario.service';
import { UsuarioModel } from './../models/usuario-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSessionService } from '../services/user-session.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  imagemUsuario?: File | null;
  nome: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private session: UserSessionService
  ) { }

  ngOnInit(): void {
  }

  trackByfn = (index: number) => index;

  aoEscolherArquivo(event: any): void {
    this.imagemUsuario = <File>event.target.files[0];
  }

  cadastrar(): void {
    this.usuario.interesses = [];
    this.usuario.educacao = [];

    const formImage = new FormData();

    const event = new Date(this.usuario.dataAniversario);
    let eventLocale = event.toLocaleString('pt-br', { timeZone: 'UTC' });

    this.usuarioService.cadastrarUsuario(this.usuario.toMap(eventLocale)).subscribe((response: UsuarioModel) => {
      console.log('RESPONSE CADASTRO:', response.id);
      //this.session.addSession(response);

      if (this.imagemUsuario != null) {
        formImage.append('image', this.imagemUsuario!, this.imagemUsuario?.name);
        formImage.append('idUsuario', response.id.toString());
        this.usuarioService.uploadImagem(formImage).subscribe((responseImage: UsuarioModel) => {

          console.log('UPLOAD IMAGEM REALIZADO!!');
          console.log('USUÁRIO RETORNADO:', responseImage);
          this.session.removeAll();
          this.session.addSession(responseImage);
          this.router.navigate(['/home']);
        });

      }
    });
  }

  adicionarInputInteresses(): void {
    this.usuario.interesses.push('');
  }
  removerInputInteresses(): void {
    this.usuario.interesses.pop();
  }

  adicionarEducacao(): void {
    this.usuario.educacao.push('');
  }
  removerEducacao(): void {
    this.usuario.educacao.pop();
  }

}
