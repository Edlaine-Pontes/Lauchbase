const nome = 'Silvana'
const sexo = 'M'
const idade = 70
const contribuicao = 45

const regraFContribuicao = sexo == 'F' && contribuicao >= 30
const regraMContribuicao = sexo == 'M' && contribuicao >= 35

const calculoAposentadoria = idade + contribuicao

if(regraFContribuicao || regraMContribuicao){
    if(sexo == 'F' && calculoAposentadoria >= 85 || sexo == 'M' && calculoAposentadoria >=95){
        console.log(`${nome} voce pode se aposentar`)
    }else{
        console.log(`${nome} voce nao pode se aposentar`)
    }}else{
        console.log(`${nome} voce nao tem o tempo minimo necessario de contribuição`)
    }


/*if ((sexo == 'F' && contribuicao >=30) || sexo == 'M' && contribuicao >=35){
    if((sexo =='F' && (contribuicao+idade) >= 85) || (sexo == 'M' && (contribuicao+idade) >=95)){
        console.log(`${nome} voce pode se aposentar`)
    }else{
        console.log(`${nome} voce nao pode se aposentar `)
    }}else{
        console.log(`${nome} voce nao tem o tempo minimo de contricao necessario`)
    }*/



   /* const nome = 'Silvana'
    const sexo = 'F'
    const idade = 48
    const contribuicao = 23
    
    const calculoContribuicao = idade + contribuicao
    
    // essas variáveis irão retornar true ou false
    const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
    const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85
    
    if ( homemPodeAposentar || mulherPodeAposentar) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você não pode se aposentar!`)
    }*/
