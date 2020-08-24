const alunosdaTurmaA = [
    {
        nome: 'Diego',
        nota: 7.5
    },
    {
        nome: 'Roberto',
        nota: 8
    },
    {
        nome: 'Jose',
        nota: 2
    },
]

const alunosdaTurmaB = [
    {
        nome: 'Jeremias',
        nota: 10
    },
    {
        nome: 'Lucas',
        nota: 1
    },
    {
        nome: 'Mariano',
        nota: 3
    },
    {
        nome: 'Juliano',
        nota: 10
    }

]

/*function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}*/

function calculaMedia(alunos){
    let soma = 0
    for(let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosdaTurmaA)
const media2 = calculaMedia(alunosdaTurmaB)

function mensagem(media, turma){
    if(media > 5){
        console.log(`A media da turma ${turma} foi de ${media}. Parabens`)
    }else{
        console.log(`A media da ${turma} é menor que 5`)
    }
}

mensagem(media1, 'turmaA')
mensagem(media2, 'turmaB')

// marcar o aluno como preprovado se a nota for menor que 5
// e tambem enviar mensagem

function marcarComoReprovado(aluno){
        aluno.reprovado = false;
        if (aluno.nota < 5 ) {
            aluno.reprovado = true;
        }
       
}


function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} esta reprovado`)
    }
}

function alunoReprovado (alunos) {
    for (let aluno of alunos){ // para cada aluno da lista de alunos faz alguma coisa quando nao tiver mais aluno fim
       marcarComoReprovado(aluno);
       enviarMensagemReprovado(aluno)
    }   
}

alunoReprovado(alunosdaTurmaA)
alunoReprovado(alunosdaTurmaB)