function addJogador(){
    const posicao= document.getElementById('posicao').value                             //pego o input pelo id e o valor digitado dentro
    const nome= document.getElementById('nome').value                                   //pego o input pelo id e o valor digitado dentro
    const numero= document.getElementById('numero').value                               //pego o input pelo id e o valor digitado dentro
   
    const confirmacao = confirm("Escalar " + nome + " como " + posicao + " ?")

    if(confirmacao){
        const listaTime = document.getElementById('listaTime')                       //pego a ul pelo id listaTime
                                                                                
        const itemLista = document.createElement('li')                               //cria uma li 
        itemLista.id='jogador-' + numero                                              //coloca o id jogador concatenado com o numero
        itemLista.innerText =  posicao + ": " + nome + " (" + numero + ")"     //coloca tipo texto concatenado com posicao nome e numero
        listaTime.appendChild(itemLista)                                     //adiciona itemLista dentro do listaTime

        document.getElementById('posicao').value=''
        document.getElementById('nome').value=''
        document.getElementById('numero').value=''

    }
}

function removeJogador(){
    const numero = document.getElementById('numeroRemover').value
    const jogdorRemovido = document.getElementById('jogador-' + numero )
    
    const confirmacao = confirm('Remover o Jogador ' + jogdorRemovido.innerText + ' ?' )

    if(confirmacao){
        jogdorRemovido.remove()
        document.getElementById('numeroRemover').value =''

    }
}