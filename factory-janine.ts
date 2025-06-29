class Carro {
  constructor(public modelo: string, public cor: string) {}

  info() {
    return `Carro modelo: ${this.modelo}, cor: ${this.cor}`;
  }
}

abstract class CarroFactory {
  abstract criarCarro(): Carro;
}

class SedanFactory extends CarroFactory {
  criarCarro(): Carro {
    return new Carro("Sedan", "Vermelho");
  }
}

class SUVFactory extends CarroFactory {
  criarCarro(): Carro {
    return new Carro("SUV", "Preto");
  }
}

const fabricaSedan = new SedanFactory();
const carro1 = fabricaSedan.criarCarro();

const fabricaSUV = new SUVFactory();
const carro2 = fabricaSUV.criarCarro();

console.log(carro1.info());
console.log(carro2.info());