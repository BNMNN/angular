import { Component } from '@angular/core';

interface Pessoa {
  ID: number;
  NOME: string;
  SOBRENOME: string;
  CPF: string;
  idade: number;
  ENDERECO: string;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

    pessoas: Pessoa[] = [
      {
        ID: 1,
        NOME: 'João',
        SOBRENOME: 'Silva',
        CPF: '111.111.111-11',
        idade: 30,
        ENDERECO: 'Rua A, 123',
      },
      {
        ID: 2,
        NOME: 'Maria',
        SOBRENOME: 'Santos',
        CPF: '222.222.222-22',
        idade: 25,
        ENDERECO: 'Av. B, 456',
      },
      {
        ID: 3,
        NOME: 'Pedro',
        SOBRENOME: 'Ferreira',
        CPF: '333.333.333-33',
        idade: 40,
        ENDERECO: 'Travessa C, 789',
      },
      {
        ID: 4,
        NOME: 'Vitor',
        SOBRENOME: 'Hugo',
        CPF: '444.444.444-44',
        idade: 64,
        ENDERECO: 'Travessa D, 165',
      },
      {
        ID: 5,
        NOME: 'Julia',
        SOBRENOME: 'Oliveira',
        CPF: '555.555.555-55',
        idade: 62,
        ENDERECO: 'Travessa E, 359',
      },
      // Adicione as outras pessoas aqui...
    ];

    pessoasMaisVelhas: Pessoa[] = [];

  exibirPessoasMaisVelhas(): void {
    this.pessoasMaisVelhas = this.pessoas.filter(pessoa => pessoa.idade >= 60);
  }

  }
  

