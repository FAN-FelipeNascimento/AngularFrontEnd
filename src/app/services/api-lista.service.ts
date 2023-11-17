import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiListaService {

  constructor(private http: HttpClient) { }

  ///Chamada de metodo resolvida pelo proxy personalizado
  public listaTodos(){
    return this.http.get("/api/ListarTarefas")
  }

}
