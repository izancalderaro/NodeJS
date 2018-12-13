import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'Gerenciador de Tarefas';
  task = new Task(21, 'Enviar orçameto para o cliente Z');
}


export class Task {
 
  public id: number;
  public title: string;
  
  constructor(id: number, title: string) {
     this.id = id;
     this.title = title;    
  }
  
}