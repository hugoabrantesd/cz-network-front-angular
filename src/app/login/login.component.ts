
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseTypesEnum } from '../enums/errors-enum';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  senha: string;
  ResponseType = ResponseTypesEnum;
  responseLogin?: ResponseTypesEnum = ResponseTypesEnum.Sucesso;

  loading: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,) {
    this.email = 'maria50@gmail.com';
    this.senha = '12345678';
  }

  login() {
    this.showLoading(true);

    const user = {
      email: this.email,
      senha: this.senha,
    };

    this.usuarioService.login(user).subscribe(resultado => {
      if (resultado.email != null) {
        this.router.navigate(['/home']);

      } else {
        this.showLoading(false);
        this.responseLogin = this.ResponseType.DadosIncorretos;
      }
    }, error => {
      if (error.message.includes('failure response')) {
        this.responseLogin = this.ResponseType.FalhaConexao;
      } else {
        this.responseLogin = this.ResponseType.DadosIncorretos;
      }

      console.error('ERRO CAPTURADO:', error.message);
      this.showLoading(false);
    });
  }

  private showLoading(value: boolean): void {
    this.loading = value;
  }

}
