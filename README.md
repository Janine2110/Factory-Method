📦 Padrão de Projeto ✦ Factory Method ✦

Também conhecido como: Método de Fábrica

❥ Propósito

༄ O Factory Method é um padrão de projeto criacional que define uma interface para criar objetos do tipo Carro, mas deixa que as subclasses decidam qual classe concreta será instanciada.
Ele desacopla o código cliente da lógica de criação dos objetos, permitindo maior flexibilidade e extensão do sistema.

❥ Problema

༄ Quando o código cria objetos diretamente usando new Carro(...), ele fica fortemente acoplado à classe concreta, dificultando a manutenção e extensão do sistema.
Além disso, a criação de diferentes variações de Carro pode gerar código repetitivo e complexo.

❥ Solução com o Factory Method

O padrão Factory Method resolve esses problemas ao delegar a criação dos objetos Carro para subclasses especializadas, chamadas fábricas concretas.
Cada fábrica implementa o método criarCarro(), retornando a instância do carro específico (exemplo: Sedan, SUV).

Assim, o código cliente apenas invoca o método da fábrica para obter um carro, sem conhecer detalhes da criação ou da classe concreta do objeto.

❥ Estrutura do padrão

Produto: A classe Carro, que define o objeto a ser criado.

Fábrica abstrata: A classe abstrata CarroFactory, que declara o método criarCarro().

Fábricas concretas: Classes como SedanFactory e SUVFactory, que implementam criarCarro().

Cliente: Usa a fábrica para obter Carro, sem depender da classe concreta.

❥ Aplicabilidade
Use o padrão Factory Method quando:

O código cliente não pode antecipar qual classe de objeto será usada.

Deseja-se permitir que subclasses escolham o que criar.

É necessário desacoplar a criação do uso do objeto.

❥ Vantagens e desvantagens

➤ Vantagens:

✅ Desacoplamento entre código cliente e classes concretas.
✅ Facilidade de extensão para novos tipos de Carro e fábricas.
✅ Centralização da criação de objetos.
✅ Segue o princípio aberto/fechado (Open/Closed Principle).

➤ Desvantagens:

⚠️ Pode aumentar o número de classes no sistema.
⚠️ Exige implementação das fábricas concretas, o que pode ser repetitivo em sistemas pequenos.

❥ Relação com outros padrões

Frequentemente usado junto com Abstract Factory e Builder para sistemas maiores.

Pode ser uma evolução natural do Prototype.

Auxilia a aplicar o Open/Closed Principle (estender sem modificar).

❥ Créditos

༄ Este conteúdo foi elaborado por Janine Veigas Farias.

