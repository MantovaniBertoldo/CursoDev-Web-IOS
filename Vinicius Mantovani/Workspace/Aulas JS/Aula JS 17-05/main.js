let aluno = {
    primeiroNome: "Vinicius",
    nota: 8,
    altura: 3.15,
    idade: 102,
    hobbies:["ping pong","Vinicius Bertoldo","Futebol"],
    personalidade:"Jogador Raro",
    endereco: {
        numeroCasa: 34,
        nomeRua:"x",
        estado: "SP"
    }
}
console.log(aluno)
console.log(aluno.nota)
console.log(aluno.hobbies[1])

console.log(aluno.endereco.numeroCasa)

console.clear()
//desestruturação do objeto
const {
    primeiroNome,
    idade,
    nota
} = aluno

console.log(nota)
console.log(idade)
console.log(primeiroNome)

console.clear()
//Array de objetos
const alunosIOS = [
    {
        nomeAluno: "Gelado",
        idade: 54,
        nota: 9
    },
    {
        nomeAluno: "Matheus",
        idade: 12,
        nota: 8
    },
    {
        nomeAluno: "Grimaldo",
        idade: 35,
        nota:10
    }
]
console.log(alunosIOS)
console.log(alunosIOS[0])
console.log(alunosIOS[0].nota)

console.log(JSON.stringify(alunosIOS))

let jsonzinho = '[{"nomeAluno":"Gelado","idade":54,"nota":9},{"nomeAluno":"Matheus","idade":12,"nota":8},{"nomeAluno":"Grimaldo","idade":35,"nota":10}]'
console.log(JSON.parse(jsonzinho))