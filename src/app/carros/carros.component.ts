import { CarroModel } from './carro.model';
import { CarrosService } from './../carros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carro: CarroModel = new CarroModel();
  carros: Array<any> = new Array();
  qtdeNaoVendidos: any = 0;
  fabricanteGrupo: Array<any> = new Array();
  novosCarros: Array<any> = new Array();

  constructor(private carrosService: CarrosService ) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  cadastrar() {
    console.log(this.carro);
    this.carrosService.cadastrarVeiculo(this.carro).subscribe(carro => {
      this.carro = new CarroModel();
      this.carregarDados();
    }, err => {
      console.log('Erro ao cadastrar o veiculo', err)
    })
  }

  atualizar(id: number) {
    this.carrosService.atualizarVeiculo(id, this.carro).subscribe(carro => {
      this.carro = new CarroModel();
      this.carregarDados();
    }, err => {
      console.log('Erro ao atualizar o veiculo', err)
    })
  }

  remover(id: number) {
    this.carrosService.removerVeiculo(id).subscribe(carro => {
      this.carro = new CarroModel();
      this.carregarDados();
    }, err => {
      console.log('Erro ao atualizar o veiculo', err)
    })
  }

  listarCarros() {
    this.carrosService.listarCarros().subscribe(carros => {
      this.carros = carros;

    }, err => {
      console.log('Erro ao listar carros', err);
    })
  }

  naoVendidos() {
    this.carrosService.naoVendidos().subscribe(qtde => {
      this.qtdeNaoVendidos = qtde;
    }, err => {
      console.log('Erro ao listar não vendidos', err);
    })
  }

  porFabricante() {
    this.carrosService.porFabricante().subscribe(fabricanteGrupo => {
      this.fabricanteGrupo = fabricanteGrupo;
    }, err => {
      console.log('Erro ao buscar grupo de fabricantes', err);
    })
  }

  novos() {
    this.carrosService.novos().subscribe(novosCarros => {
      this.novosCarros = novosCarros;
    }, err => {
      console.log('Erro ao buscar novos carros');
    })
  }

  carregarDados() {
    this.listarCarros();
    this.naoVendidos();
    this.porFabricante();
    this.novos();
  }

}
