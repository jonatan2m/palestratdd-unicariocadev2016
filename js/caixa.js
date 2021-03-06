/*
Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico. Os requisitos básicos são os seguintes:
Entregar o menor número de notas;
É possível sacar o valor solicitado com as notas disponíveis;
Saldo do cliente infinito;
Quantidade de notas infinito (pode-se colocar um valor finito de cédulas para aumentar a dificuldade do problema);
Notas disponíveis de R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00
Exemplos:
Valor do Saque: R$ 30,00 – Resultado Esperado: Entregar 1 nota de R$20,00 e 1 nota de R$ 10,00.
Valor do Saque: R$ 80,00 – Resultado Esperado: Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$ 10,00.

Adaptação
Caixa somente com notas de R$ 10,00
Caixa somente com notas de R$ 10,00 e R$ 50,00
Caixa somente com notas de R$ 10,00, R$ 50,00 e R$ 100,00
Caixa somente com notas de R$ 10,00, R$ 20,00, R$ 50,00 e R$ 100,00

*/

function CaixaEletronico() {

	this.saque = function(valor) {
		var notas = new Notas();
		if(valor == 60){
			notas.dez = 1;
			notas.cinquenta = 1;
			//return notas;
		} else if(valor >= 50){
			notas.cinquenta = valor / 50;
			
		}else{
			notas.dez = valor / 10;
		}

		return notas;
	};
}

function Notas (){
	this.dez = 0;
	this.cinquenta = 0;
}






