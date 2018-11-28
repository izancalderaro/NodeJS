import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  // contatosUrl = 'http://localhost:8080/contatos';
  contatosUrl = 'http://localhost:8080/read';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.contatosUrl}`);
  } 
}
