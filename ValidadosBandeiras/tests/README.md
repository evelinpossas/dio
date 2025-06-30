Documentação de Testes
Objetivo
Esta pasta contém os testes automatizados e/ou manuais para validar o funcionamento correto da aplicação de identificação da bandeira do cartão de crédito.

Tipos de Testes
Testes manuais: Execução direta do programa para validar entradas e saídas esperadas.

Testes automatizados: (Se implementados) Scripts para validar automaticamente as funções principais.

Estratégia de Testes
Testar números de cartão válidos para cada bandeira suportada (Visa, MasterCard, Amex, Discover).

Testar números inválidos (tamanho incorreto, caracteres não numéricos, prefixos inválidos).

Testar formatações diferentes (com espaços, traços).

Verificar mensagens de erro para entradas inválidas.

Como Rodar os Testes
Testes Manuais
Execute o programa principal:

bash
Copiar
Editar
node ../src/index.js
Insira números de cartão variados para verificar a saída.

Testes Automatizados (Se houver)
Se houver scripts de teste (ex: usando Jest, Mocha, etc.):

bash
Copiar
Editar
npm test
ou

bash
Copiar
Editar
npx jest
Exemplos de Casos de Teste
Número do Cartão	Resultado Esperado
4111111111111111	Visa
5500000000000004	MasterCard
340000000000009	American Express
6011000000000004	Discover
1234567890123456	Bandeira não identificada
4111 1111 1111 1111	Visa
4111-1111-1111-1111	Visa

Ferramentas de Teste
Terminal Node.js para testes manuais

(Opcional) Frameworks de teste JS: Jest, Mocha

Como Contribuir com Testes
Contribuições para ampliar a cobertura dos testes são bem-vindas!

Crie scripts de teste para novos casos.

Automatize testes manuais.

Documente novos cenários e resultados esperados.

