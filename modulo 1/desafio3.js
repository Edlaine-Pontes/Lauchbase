/* desafio parte 1
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    endereço: {
        logradouro: 'Rua Guilherme Gembala',
        número: '260',
    }
}

console.log(`A empresa ${empresa.nome} esta localizada em ${empresa.endereço.logradouro}, ${empresa.endereço.número}`)*/

const usuario = {
    nomeUsuario: 'Carlos',
    idadeUsuario: 32,
    tecnologias: [
        {
            nome: 'C++', especialidade: 'Destop'
        },

        {
            nome: 'JavaScrip', especialidade: 'Web/Mobile'
        }
    ]
}

console.log(`O usuario ${usuario.nomeUsuario} tem ${usuario.idadeUsuario} anos e usa a tecnologia ${usuario.tecnologias[0].nome} com especialidade em ${usuario.tecnologias[0].especialidade}`)
