// impar ou par
// se a sobra da divisao do numero por 2 for 1 esse numero é par
// se a sobra da divisao do numero por 2 for 0 esse numero é par

var imparpar = 10
if(imparpar % 2 == 1){
  console.log("é impar")
}else{
  console.log("é par")
}

// Validação encadeada
// Primeira validação se é par
// Segunda validação número maior que 10
// O número é par e maior que 10
// O número é par porem é menor que 10

var imparpar2 = 11
if(imparpar2 % 2 == 1){
  console.log("é impar")
}else{
  if(imparpar2 > 10)
  console.log("O número é par e maior que 10")
}else{
  console.log("O número é par porem é menor que 10")
}