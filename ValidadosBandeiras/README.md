# Identificador de Bandeira de Cartão de Crédito

## Descrição do Projeto

Este projeto consiste em uma aplicação simples capaz de identificar a bandeira (bandeira = marca, como Visa, MasterCard, American Express, etc.) de um cartão de crédito a partir do número fornecido. O objetivo é aplicar lógica e padrões para reconhecimento da bandeira, utilizando técnicas comuns no mercado financeiro.

Durante o desenvolvimento, o GitHub Copilot foi utilizado como assistente de codificação para acelerar a criação do código, sugerir trechos e melhorar a produtividade, demonstrando como a inteligência artificial pode apoiar o processo de desenvolvimento.

---

## Objetivos do Projeto

- Criar uma solução funcional para identificação da bandeira de cartões de crédito.
- Praticar a reprodução e melhoria de um projeto baseado em código existente.
- Documentar de forma clara o raciocínio técnico e as decisões adotadas.
- Utilizar o GitHub para versionamento e exposição do trabalho.
- Explorar o uso do GitHub Copilot como ferramenta de apoio ao desenvolvimento.

---

## Tecnologias Utilizadas

- Linguagem de programação: *[exemplo: JavaScript, Python, etc. — personalize aqui]*
- Git e GitHub para controle de versão e hospedagem do código
- GitHub Copilot para sugestões inteligentes de código
- Markdown para documentação

---

## Como Funciona a Identificação da Bandeira

A identificação da bandeira do cartão é feita por meio da análise dos primeiros dígitos do número do cartão, conhecidos como BIN (Bank Identification Number). Cada bandeira possui um conjunto específico de prefixos e tamanhos de número.

Exemplo:

| Bandeira     | Prefixos           | Tamanho do Número |
|--------------|--------------------|-------------------|
| Visa         | 4                  | 13 ou 16 dígitos  |
| MasterCard   | 51 a 55            | 16 dígitos        |
| Amex         | 34, 37             | 15 dígitos        |
| Discover     | 6011, 65           | 16 dígitos        |

---

## Estrutura do Projeto

