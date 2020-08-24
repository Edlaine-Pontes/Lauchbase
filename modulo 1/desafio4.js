const usuarios = [
    {
        nome: 'Carlos', 
        tecnologias: ['HTML', 'CSS']
    },
    {
        nome: 'Jasmine',
        tecnologias: ['Javascript', 'CSS']
    },
    {
        nome: 'Taune',
        tecnologias: ['HTML', 'Node.js']
    }
];

function mensagemLista(usuarios){
    for(let usuario of usuarios){
        console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`)

    }


}

mensagemLista(usuarios)