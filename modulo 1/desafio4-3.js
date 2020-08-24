const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(inputs){
    user.transactions.push(inputs)

    
    let saldo = user.balance

    if(inputs.type == "credit") {
        saldo += inputs.value
    }else{
        saldo -= inputs.value
    }
    
    user.balance = saldo
};


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);


 function getHigherTransactionByType(credit) {
    const credito = user.transactions.filter(cre => cre.type ==credit)
    
    let max = {
        value: 0
    }

    credito.forEach(trans => {
        if (trans.value > max.value) {
            max = trans
        }
    })

    return max
}

  
console.log(getHigherTransactionByType("credit"))
console.log(getHigherTransactionByType("debit"))


function getAverageTransactionValue(){
    let total = user.transactions.reduce((total, num) => total + num.value, 0)

    const mediaC = total / user.transactions.length

    return mediaC

}

console.log(getAverageTransactionValue())


function getTransactionsCount(){

    const cred = user.transactions.filter(credi => credi.type =="credit")
    const deb = user.transactions.filter(debi => debi.type =="debit")


    let resultado1 = cred.length
    let resultado2 = deb.length

    const final = {

        credit: resultado1,

        debit: resultado2,

    }

    return final

}    


console.log(getTransactionsCount())
    


    





  /*user.transactions.push({ type: "credit", value: 50 });
  user.transactions.push({ type: "credit", value: 120});
  user.transactions.push({ type: "debit", value: 80 });
  user.transactions.push({ type: "debit", value: 30 });
  

  //console.log(user.transactions);

  //getHigherTransactionByType("credit"); // { type: 'credit', value: 120 } retornar transação de maior valor

 function getAverageTransactionValue(){
    
    let soma = 0
    for(let i = 0; i < transactions.length; i++){
        soma = soma + transactions[i].value
    }
    const media = soma / transactions.length
    return soma 
  }// 83.3 retornar a media das transações

const medias = getAverageTransactionValue(user.transactions)

console.log(getAverageTransactionValue)

  //getTransactionsCount(); // { credit: 5, debit: 3 } retornar a quantidade de transações por tipo*/