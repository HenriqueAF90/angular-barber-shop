import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';



const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  //caso queir add um rota filha de cadastro ex cadastro/1
  //podemos adicionar o children  e passar do mesmo jeito o path da rota
  {path: 'cadastro', component: CadastroComponent},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
