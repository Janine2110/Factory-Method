Padrão de Projeto ✦ Factory Method ✦
Também conhecido como: Método de Fábrica

❥ Propósito
༄ O Factory Method é um padrão de projeto criacional que define uma interface para criar objetos do tipo Carro, mas deixa que as subclasses decidam qual classe concreta será instanciada. Ele desacopla o código cliente da lógica de criação dos objetos, permitindo maior flexibilidade e extensão do sistema.

❥ Problema
༄ Quando o código cria objetos diretamente usando new Carro(...), ele fica fortemente acoplado à classe concreta, dificultando a manutenção e extensão do sistema. Além disso, a criação de diferentes variações de Carro pode gerar código repetitivo e complexo.

❥ Solução com o Factory Method
O padrão Factory Method resolve esses problemas ao delegar a criação dos objetos Carro a subclasses especializadas, chamadas fábricas concretas. Cada fábrica implementa o método de criação (criarCarro()), retornando a instância do carro específico (exemplo: Sedan, SUV).

Assim, o código cliente apenas invoca o método da fábrica para obter um carro, sem conhecer detalhes da criação ou da classe concreta do objeto.

❥ Estrutura do padrão
Produto: A classe abstrata ou interface Carro que define o objeto a ser criado.

Fábrica abstrata: Uma classe abstrata CarroFactory que declara o método criarCarro().

Fábricas concretas: Classes como SedanFactory e SUVFactory que implementam o método criarCarro(), retornando os carros específicos.

Cliente: Usa a fábrica abstrata para obter objetos Carro sem depender das classes concretas.

❥ Aplicabilidade
༄ Use o padrão Factory Method quando:

O código cliente não pode antecipar a classe exata do objeto que precisa criar.

Deseja-se permitir que subclasses decidam qual objeto instanciar.

É necessário desacoplar a criação do objeto da sua utilização.

❥ Vantagens e desvantagens
➤ Vantagens:

Promove o baixo acoplamento entre código cliente e classes concretas.

Facilita a extensão do sistema com novos tipos de Carro e fábricas.

Centraliza a criação dos objetos, facilitando manutenção.

➤ Desvantagens:

Pode aumentar o número de classes no sistema.

Exige que as subclasses implementem os métodos de criação, o que pode ser verboso.

❥ Relação com outros padrões
Frequentemente usado junto com Abstract Factory e Builder para sistemas complexos de criação.

Pode ser uma etapa evolutiva do padrão Prototype.

Auxilia na implementação do princípio aberto/fechado (Open/Closed Principle).

❥ Créditos
༄ Este conteúdo foi elaborado por Janine Veigas Farias.
