const nome = 'Henrique'
const peso = 98
const altura = 1.87
const sexo = 'M'

const imc = peso / (altura * altura)

if(imc >= 30){
    console.log(`${nome} você esta acima do peso`)
}else{
    console.log(`${nome} voce esta não esta acima do peso`)
}
