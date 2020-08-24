const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

/*const a = calculaSaldo([2, 2], [1, 1]) exemplo para entender o conceito de chamar uma funçao
 console.log(a)*/

for(let usuario of usuarios){
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
    if (saldo >= 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo}`)
    }
}


function calculaSaldo(receitas, despesas){ 
    
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)
    const saldo = somaReceitas - somaDespesas
    return Math.round(saldo*100)/100

}

function somaNumeros(numeros){
    let soma = 0
    numeros.forEach(element => {
        soma = soma + element
    
    });

    return soma
}

/*

  function somaNumeros(numeros){
    const somaRc = 0
    const somaDs = 0
        for(let i = 0; i < usuarios.length; i++){
        somaRc = somaRc + usuarios[i].receitas
        somaDs = somaDs + usuarios[i].despesas
    }

    const receitas = somaRc
    const despesas = somaDs
    return receita, despesa
}

/*

function calculaSaldo(receitas, despesas){

    for(let usuario)

    const saldo = receitas - despesas
    if(saldo > 0 ){
        console.log(`${usuarios.nome} ´possui saldo positivo de ${saldo}`)
    }else{
        console.log(`${usuarios.nome} ´possui saldo negativo de ${saldo}`)
    }
};
calculaSaldo(receitas, despesas)*/