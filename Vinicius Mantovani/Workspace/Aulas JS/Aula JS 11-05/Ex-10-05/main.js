// while
let contador = 1;
while (contador <= 50) {
  console.log(`Numero = ${contador}`);
  contador++;
}

// do-while
console.clear();
let i = 10,
  text1 = "";
do {
  text1 += `O número é ${i}\n`;
  i--;
} while (i > 0);
console.log(text1);

// For
console.clear();
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
    console.log(i);
  }
}