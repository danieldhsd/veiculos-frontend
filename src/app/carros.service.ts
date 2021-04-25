import { CarroModel } from './carros/carro.model';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private http: HttpClient) { }

  cadastrarVeiculo(carro: CarroModel) : Observable<any> {
    return this.http.post("http://localhost:8080/veiculos/", carro);
  }

  atualizarVeiculo(id:any, carro: CarroModel): Observable<any> {
    return this.http.put("http://localhost:8080/veiculos/".concat(id), carro);
  }

  removerVeiculo(id:any) {
    return this.http.delete("http://localhost:8080/veiculos/".concat(id));
  }

  listarCarros() : Observable<any> {
    return this.http.get("http://localhost:8080/veiculos/");
  }

  novos() : Observable<any> {
    return this.http.get("http://localhost:8080/veiculos/novos");
  }

  porFabricante() : Observable<any> {
    return this.http.get("http://localhost:8080/veiculos/porFabricante");
  }

  naoVendidos() : Observable<any> {
    return this.http.get("http://localhost:8080/veiculos/naoVendidos");
  }
}
