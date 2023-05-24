const Ex = [17, 43, 8, 4, 97, 56, 29];

Ex.forEach((valor) => {
    
if (valor % 2 === 0) {
        
console.log(`O número ${valor} é par`);
    } 
else {
        
console.log(`O número ${valor} é ímpar`);
    }
});

console.log(`------------------------------------`);

const Atividade = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82];
let filtroAtividade = Atividade.filter((numero) => {
    
return numero >= 20 && numero <= 80;
});
console.log(filtroAtividade);