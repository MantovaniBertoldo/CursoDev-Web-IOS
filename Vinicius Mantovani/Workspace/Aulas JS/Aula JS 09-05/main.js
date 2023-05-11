// Receber as frutas
let fruta1 = "Abacate";
let fruta2 = "Banana";
let fruta3 = "Maça";
let fruta4 = "Laranja";
let fruta5 = "Uva";

// Calcular o length de cada fruta

console.log("quantidade de letras");

// Extrair os 3 primeiros caracteres de cada fruta

const substring2 = fruta2.substring(0, 3);

// Remover espaços em branco do início de cada fruta
const trimmed3 = fruta3.trim();

// Converter cada fruta para caixa baixa
const lower4 = fruta4.toLowerCase();

// Exibir a listagem de frutas em um template string
console.log(
  `As frutas são: ${fruta1}, ${fruta2}, ${fruta3}, ${fruta4} e ${fruta5}.`
);
