import { Router } from '@angular/router';
import { Component, OnInit, } from '@angular/core';
import { UsuarioModel } from '../models/usuario-model';
import { UserSessionService } from '../services/user-session.service';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],

})
export class PerfilComponent implements OnInit {
  usuario?: UsuarioModel;

  constructor(
    private session: UserSessionService,
    private usuarioService: UsuarioService,
  ) { }

  async ngOnInit() {
    let user: UsuarioModel = <UsuarioModel>this.session.getSession();

    if (user != null) {
      await new Promise(r => setTimeout(r, 500));
      this.usuario = user;
    }
  }



}
