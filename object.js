const cliente = {
    nome: 'Victor',
    idade: 27,
    cpf: "00000000000",
    email: "email@email"
}

console.log(cliente.nome)
console.log(cliente.idade)

const produto = {
    desc: 'FILTRO DE OLEO',
    ean: '789789789789789798',
    preco: 19.90,
    est: 'positivo'
}

console.log(produto.desc)
console.log(produto.preco)
console.log(produto.est)

const modulo = {
    ativo: true,
    cnf: false,
    code: 1111.222,
    state: 'Não configurado'
}

console.log(modulo.ativo)
console.log(modulo.state)
console.log(modulo.code)

const youtube = {
    viciado: 'sim',
    horasDia: 24,
    var: 'x',
}

console.log(youtube.viciado)
console.log(youtube.horasDia)

const home = {
    servidor: 'bugado',
    ativo: false,
    empresa: 'lixo'
}
 console.log(home.ativo)
 console.log(home.empresa)

 const binario = {
     um: 1,
     zero: 0,
     outros: 'NaN'
 }

 console.log(binario.um)
 console.log(binario.zero)

 const treino = {
     repetir: true,
     praticar: true,
     procrastinar: false, 
     consistencia: true
 }

 console.log(treino.repetir)
 console.log(treino.praticar)
 console.log(treino.procrastinar)

 const virtualBox = {
     os: 'linux',
     v: 1.14,
     tempoUso: '24 horas',
     falta: 'criatividade'
 }

 console.log(virtualBox.falta)
 console.log(virtualBox.v)

 console.log(`Eu tenho uma const chamada virtual box, no qual o sistema operacional é ${virtualBox.os}.`)
 console.log(`Meu nome é ${cliente.nome}, e eu tenho ${cliente.idade}.`)
 

 const string = {
     f1: 'Incrível como',
     f2: 'Realmente',
     n1: 2,
     n3: 3
     
 }

 console.log(`${string.f1} a mente do ser humano é extensa. ${string.f2}, a natureza é um mistério.`)

 const data = {
     comida: ['melão', 'banana', 'maçã', 'morango'],
     bebida: ['agua', 'suco', 'refrigerante zero'],
     sobremesa: [true, false],
     contaStatus: ['conta paga', 'conta pendente']
 }

 console.log(`Eu gostaria de comer uma fatia de ${data.comida[0]}.
            E em seguida, gostaria de tomar um ${data.bebida[2]}.`)
 console.log(`Sobremesa, senhor?`)
 console.log(`${data.sobremesa[1]}`)
 console.log('Verifique se a consta está paga por gentileza')
 console.log(`A conta está paga? 
                loading...
                            ...
            ${data.contaStatus[0]}`)