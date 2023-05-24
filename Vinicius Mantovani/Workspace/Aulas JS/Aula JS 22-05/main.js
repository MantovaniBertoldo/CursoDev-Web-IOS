const Ex = [17, 43, 8, 4, 97, 56, 29];

1.forEach((valor)) => {
    if(valor % 2 == 0){
        console.log('O numero: ${valor} é par')
    }
    else {
        console.log('O numero: $ {valor} é impar')
    }
}
Ex.forEach(valor)

console.log(`------------------------------------`)

const Atividade = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82]
let filtroatividade2 = Atividade.filter((Number) => {
    return Number >= 20 && Number <= 80
})
 console.log(filtroatividade2);