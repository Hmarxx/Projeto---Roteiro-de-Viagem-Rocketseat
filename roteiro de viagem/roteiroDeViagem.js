// objeto {}
const atividade = {
    nome: 'almoço',
    data: new Date("2024-07-08 08:00"),
    finalizada: true
}

// lista, array
const atividades = [
    atividade,
    {
        nome: "academia",
        data: new Date("2024-07-08 10:00"),
        finalizada: false
    },
    {
        nome: "sessão de jogo",
        data: new Date("2024-07-08 16:00"),
        finalizada: true
    },
]

//função de seta (arry function () => {})
    const criarItemDeAtividade = (atividade) => {

        let input = '<input type="checkbox" '

        if(atividade.finalizada){
            input += 'checked'
        }
        input += '>'

        return `
        <div>
            ${input}
            <span>${atividade.nome}</span>
            <time>${atividade.data}</time>
        </div>
        `
    }

    const section = document.querySelector('section')
    for(let atividade of atividades){
        section.innerHTML += criarItemDeAtividade(atividade)
    }