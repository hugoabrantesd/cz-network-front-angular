import { UserSessionService } from '../services/user-session.service';
import { UsuarioService } from './../services/usuario.service';
import { UsuarioModel } from './../models/usuario-model';
import { Component, OnInit } from '@angular/core';
import { PostagemModel } from '../models/postagem-model';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { LoginComponent } from '../login/login.component';

export let browserRefresh = false;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario!: UsuarioModel;

  constructor(
    private session: UserSessionService,
    private router: Router,
    private usuarioService: UsuarioService,) {

    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        if (
          event.id === 1 &&
          event.url === event.urlAfterRedirects
        ) {
          this.usuarioService.buscarPostagens();
        }
      })
  }

  async ngOnInit() {
    let user: UsuarioModel = <UsuarioModel>this.session.getSession();

    if (user != null) {
      await new Promise(r => setTimeout(r, 500));
      this.usuario = user;

      const posts: PostagemModel[] = [];

      for (let post of user?.postagens) {
        posts.push(post);

      }

      let user2 = new UsuarioModel(
        0,
        user.nomeCompleto,
        user.dataAniversario,
        user.descricaoBio,
        user.urlFoto,
        user.email,
        user.senha,
        user.confirmaSenha,
        user.numeroWhatsapp,
        user.visibilidadeDoPerfil,
        new Date(),
        posts,
      );
      console.log('Postagem 1:', user2.postagens[0]);
      console.log('URL:', user2.urlFoto);
    }

  }

}
