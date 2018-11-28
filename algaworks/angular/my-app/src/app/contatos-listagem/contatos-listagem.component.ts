import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

 /*   contatos = [
    {id: 1, nome: 'Márcio', email:"marcio@yahoo.com"},
    {id: 2, nome: 'Bete', email:"bete@yahoo.com"},
    {id: 3, nome: 'João', email:"joao@yahoo.com"},
    {id: 4, nome: 'Maria', email:"maria@yahoo.com"},
  ]; */

  contatos: Array<any>;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){ 
    this.contatoService.listar().subscribe(dados => this.contatos = dados);
  }

  
}
