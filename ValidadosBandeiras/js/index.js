// index.js

/**
 * Função para identificar a bandeira do cartão com base no número.
 * @param {string} cardNumber Número do cartão de crédito
 * @returns {string} Nome da bandeira ou mensagem de erro
 */
function identificarBandeira(cardNumber) {
  // Remove espaços e traços comuns no input
  const numero = cardNumber.replace(/[\s-]/g, '');

  // Verifica se só tem dígitos e tamanho mínimo 13
  if (!/^\d{13,19}$/.test(numero)) {
    return 'Número do cartão inválido.';
  }

  // Visa: começa com 4, tamanho 13 ou 16
  if (/^4\d{12}(\d{3})?$/.test(numero)) {
    return 'Visa';
  }

  // MasterCard: começa entre 51 e 55, tamanho 16
  if (/^5[1-5]\d{14}$/.test(numero)) {
    return 'MasterCard';
  }

  // American Express: começa com 34 ou 37, tamanho 15
  if (/^3[47]\d{13}$/.test(numero)) {
    return 'American Express';
  }

  // Discover: começa com 6011 ou 65, tamanho 16
  if (/^(6011|65)\d{12}$/.test(numero)) {
    return 'Discover';
  }

  return 'Bandeira não identificada.';
}

// Exemplo de uso simples via terminal:
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite o número do cartão: ', cardNumber => {
  const bandeira = identificarBandeira(cardNumber);
  console.log(`Bandeira identificada: ${bandeira}`);
  readline.close();
});
