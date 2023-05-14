const fruta1 = ' Laranja';
const fruta2 = 'Banana';
const fruta3 = 'Abacaxi';
const fruta4 = 'Manga';
const fruta5 = 'Morango';

console.log(`A quantidade de caracteres da fruta 1 é: ${fruta1.length}, fruta 2 é: ${fruta2.length}, fruta 3 é: ${fruta3.length}, fruta 4 é: ${fruta4.length} e fruta 5 é: ${fruta5.length}`);

console.log(fruta1.substring(0, 3), fruta2.substring(0, 3), fruta3.substring(0, 3), fruta4.substring(0, 3), fruta5.substring(0, 3));

console.log(fruta1.trim());

console.log(fruta1.replace(' Laranja', 'Kiwi'.toLowerCase()), fruta2.replace('Banana', 'Pêssego'.toLowerCase()), fruta3.replace('Abacaxi', 'Uva'.toLowerCase()), fruta4.replace('Manga', 'Melancia'.toLowerCase()), fruta5.replace('Morango', 'Abacate'.toLowerCase()));

console.log(`O nome das frutas são: ${fruta1}, ${fruta2}, ${fruta3}, ${fruta4}, ${fruta5}`)