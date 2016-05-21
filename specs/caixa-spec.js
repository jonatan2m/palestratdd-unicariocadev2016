describe('Caixa eletrônico', function() {

	var caixa;
	beforeEach(function(){			
		caixa = new CaixaEletronico();
	});

	it("quando sacar R$10,00 deve sair 1 nota de R$ 10,00", function() {		
		var notas = caixa.saque(10);
		expect(1).toBe(notas.dez);		
	});

	it("quando sacar R$20,00 deve sair 2 nota de R$ 10,00", function() {		
		var notas = caixa.saque(20);
		expect(2).toBe(notas.dez);		
	});

	it("quando sacar R$50,00 deve sair 1 nota de R$ 50,00", function() {		
		var notas = caixa.saque(50);
		expect(1).toBe(notas.cinquenta);		
	});

	it("quando sacar R$100,00 deve sair 2 nota de R$ 50,00", function() {		
		var notas = caixa.saque(100);
		expect(2).toBe(notas.cinquenta);		
	});

	it("quando sacar R$60,00 deve sair 1 nota de R$ 50,00 e 1 R$ 10,00", function() {		
		var notas = caixa.saque(60);
		
		expect(1).toBe(notas.dez);
		expect(1).toBe(notas.cinquenta);		
	});
});









