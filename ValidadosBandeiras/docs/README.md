Documentação Técnica
Visão Geral
Nesta pasta estão os documentos que detalham os aspectos técnicos e funcionais do projeto Identificador de Bandeira de Cartão de Crédito.

Aqui você encontrará informações sobre arquitetura, lógica de identificação, validações, testes, e boas práticas adotadas.

Arquitetura do Projeto
O projeto é estruturado em módulos para facilitar a manutenção.

O código principal está localizado na pasta /src.

A documentação está organizada em /docs.

Uso do GitHub Copilot para suporte durante o desenvolvimento.

Lógica de Identificação da Bandeira
A identificação é feita analisando o BIN (Bank Identification Number), ou seja, os primeiros dígitos do cartão.

Para cada bandeira, são validados prefixos específicos e o tamanho do número do cartão.

Expressões regulares são usadas para validar padrões e garantir confiabilidade.

Fluxo de Funcionamento
Entrada do número do cartão pelo usuário.

Limpeza do número removendo espaços e caracteres especiais.

Verificação do formato e comprimento do número.

Comparação do prefixo e tamanho contra padrões conhecidos.

Retorno da bandeira identificada ou mensagem de erro.

Testes Realizados
Testes manuais com números reais e fictícios para as principais bandeiras (Visa, MasterCard, Amex, Discover).

Validação de casos inválidos para evitar falsos positivos.

Testes de entrada com formatos variados (com espaços, traços, números incorretos).

Possíveis Melhorias Futuras
Implementar validação com algoritmo de Luhn para verificar validade do cartão.

Suporte a outras bandeiras, como Elo, Hipercard, Diners Club.

Criar uma interface web para facilitar o uso.

Automatizar testes unitários e integração contínua.

Referências e Recursos
Documentação oficial das bandeiras e BINs (exemplo: https://www.binlist.net/)

Guia de uso do GitHub Copilot: https://docs.github.com/en/copilot

Markdown no GitHub: https://guides.github.com/features/mastering-markdown/

