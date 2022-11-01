import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  private userSession: UsuarioModel[] = [];

  constructor() {

  }

  addSession(value: UsuarioModel) {
    localStorage.setItem('usuario', JSON.stringify(value));
  }

  getSession(): UsuarioModel | null {

    let usuarioString: string | null = localStorage.getItem('usuario');

    if (usuarioString != null) {
      let usuario: UsuarioModel = JSON.parse(usuarioString);
      return usuario;
    }

    return null;
  }

  removeAll(): void {
    localStorage.removeItem('usuario');
  }

}

