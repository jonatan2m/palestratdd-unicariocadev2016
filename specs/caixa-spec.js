describe('Caixa eletrônico', function() {

	var caixa;
	beforeEach(function(){			
		caixa = new CaixaEletronico();
	});

	it("quando sacar R$10,00 deve sair 1 nota de R$ 10,00", function() {		
		var nota = caixa.saque(10);
		expect(1).toBe(nota);		
	});

	it("quando sacar R$20,00 deve sair 2 nota de R$ 10,00", function() {		
		var nota = caixa.saque(20);
		expect(2).toBe(nota);		
	});
});