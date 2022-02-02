const rest = {
        entrada: [true, false],
        entrada1: ['bolinho de bacalhau', 'coxinha de frango', 'sticks de mussarela'],
        bebida: true,
        bebida1: ['agua', 'agua com gas', 'suco natural', 'refrigerante', 'cerveja'],
        pratoP: true,
        pratoP1: ['Costela assada + acompanhamentos', 'Picanha + acompanhamentos', 'Entrecotê + acompanhamentos'],
        sobremesa: [true, false],
        sobremesa1: ['petit gateau', 'sorvete', 'pudim'],
        total: 200.49 
}

console.log(`Boa noite senhor, deseja entrada?
            ${rest.entrada[0]}
            Certo, o que você gostaria?
            ${rest.entrada1[2]}
            Ótima pedida, gostaria de pedir a bebida agora?
            ${rest.bebida}
            E qual seria?
            ${rest.bebida1[3]}
            E o prato principal?
            ${rest.pratoP1[1]}
            ....
            ....
            ....
            
            ....
            Gostaria de sobremesa, senhor?
            ${rest.sobremesa[0]}
            E qual seria?
            ${rest.sobremesa1[2]}
            ...
            ...
            ...
            ...
            Excelente, o total ficou ${rest.total}`
            )