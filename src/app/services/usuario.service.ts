import { UserSessionService } from './user-session.service';
import { UsuarioModel } from './../models/usuario-model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'http://localhost:8080/usuario'

  userLogged?: UsuarioModel;

  constructor(private httpClient: HttpClient, private session: UserSessionService) { }

  cadastrarUsuario(usuario: any): Observable<UsuarioModel> {
    return this.httpClient.post<any>(this.url + '/salvar', usuario);
  }
  
  uploadImagem(imagem: FormData): Observable<UsuarioModel> {
    return this.httpClient.post<UsuarioModel>(this.url + '/salvar-imagem-usuario', imagem);
  }

  login(user: any): Observable<UsuarioModel> {
    user = this.httpClient.post<any>(this.url + '/login', user);
    user.subscribe((arg: any) => {
      this.userLogged = arg;
      this.session.addSession(arg);
    });
    return user;
  }

  buscarPostagens(): void {
    let user: string | null = localStorage.getItem('usuario');
    if (user != null) {
      const usuario: UsuarioModel = JSON.parse(user);

      const usuarioPostagensLength = usuario.postagens.length;
      let usuarioEncontradoPostagensLength = 0;

      const postagens = this.httpClient.get<UsuarioModel>(this.url + '/buscar/' + usuario.id);
      postagens.subscribe((usuarioEncontrado: UsuarioModel) => {
        usuarioEncontradoPostagensLength = usuarioEncontrado.postagens.length;

        usuario.postagens.concat(usuarioEncontrado.postagens);
        usuario.postagens.length = 0;
        for (let post of usuarioEncontrado.postagens) {
          usuario.postagens.push(post);
        }
        localStorage.removeItem('usuario');
        localStorage.setItem('usuario', JSON.stringify(usuario));

        if (usuarioPostagensLength != usuarioEncontradoPostagensLength) {
          window.location.reload();
        }
      });
    }
  }

  buscarUsuarioDaSessao(): UsuarioModel | null {
    const usuarioString: string | null = localStorage.getItem('usuario');
    if (usuarioString != null) {
      const usuario: UsuarioModel = JSON.parse(usuarioString);
      return usuario;
    }
    return null;
  }

}
