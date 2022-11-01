import { ModalComponent } from './modal/modal.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'notificacoes', component: NotificacoesComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'editar-perfil', component: EditarPerfilComponent },
  { path: 'modal', component: ModalComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
