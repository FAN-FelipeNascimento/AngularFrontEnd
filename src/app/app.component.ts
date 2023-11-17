import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiListaService } from './services/api-lista.service';
import { ListarComponent } from './listar/listar.component';
import { tap } from 'rxjs';
import { Tarefas } from '../models/tarefas.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Listas';
 public dados: any;
 arrTarefas : any[] = [];
 public varId : any = 0;
 public varDesc : any = "";

  constructor(private apiLista : ApiListaService){
    apiLista.listaTodos().subscribe(
      (data) => { 
        this.arrTarefas.push(data); 
        
        for (var i = 0; i < this.arrTarefas.length; i++) {
          for(var j = i; j < this.arrTarefas.length; j++){
            console.log(this.arrTarefas[0])
            this.varId = this.arrTarefas[i][j]["idTarefa"];
            this.varDesc = this.arrTarefas[i][j]["descricao"];
          } 
        }
      },
      (error) => {console.log(error);}
    )
  }

  remover(item : Tarefas){ 
    const idRemover =  this.arrTarefas.indexOf(item);    //captura o id que vou excluir
    //Valida o id encontrado
    if (idRemover !== -1) { this.arrTarefas.splice(idRemover,1); }
  }

  concluir(item : Tarefas){ item.Status = true; }
  refazer(item : Tarefas){ item.Status = false; }

}