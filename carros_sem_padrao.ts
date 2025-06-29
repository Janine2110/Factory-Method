class Carro {
  modelo: string;
  cor: string;

  constructor(modelo: string, cor: string) {
    this.modelo = modelo;
    this.cor = cor;
  }

  info() {
    return `Carro modelo: ${this.modelo}, cor: ${this.cor}`;
  }
}

// Criando carros direto:
const carro1 = new Carro("Sedan", "Vermelho");
const carro2 = new Carro("SUV", "Preto");

console.log(carro1.info());
console.log(carro2.info());
