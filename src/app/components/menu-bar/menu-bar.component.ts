import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
 /*
  Usar no futuro para enviar dados para o backed
  //recuperando informações passadas no navegador
  //exemplo de rota /produtos&nome=cadeira&preco=100
  constructor(private parametros: ActivatedRoute){
    this.parametros.queryParams.subscribe(
      res => console.log(res)
    );
    //retorna valores tipo ID
    // ex de rota /produtos/1
    this.parametros.params.subscribe(
      res => console.log(res)
    );
  }
  */
}
