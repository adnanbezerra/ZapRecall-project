import Title from "./shared/Title";
import Card from "./Card";
import React from 'react';
import loguinho from "./images/loguinho.png";
import InitialCard from "./InitialCard";

let randomized = false;
function randomizeCards(array) {
    if (!randomized) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        for (let i = 0; i < array.length; i++) {
            array[i].id = i;
        }

        randomized = true;
        return array;
    }
}

export default function Zap() {

    const [done, setDone] = React.useState([]);

    const listaCartoes = [
        {
            id: 0,
            tipo: InitialCard,
            pergunta: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript"
        },
        {
            id: 0,
            tipo: InitialCard,
            pergunta: "O React é __ ",
            resposta: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            id: 0,
            tipo: InitialCard,
            pergunta: "Componentes devem iniciar com __ ",
            resposta: "letra maiúscula"
        },
        {
            id: 0,
            tipo: InitialCard,
            pergunta: "Podemos colocar __",
            resposta: "expressões"
        },
        {
            id: 0,
            tipo: InitialCard,
            pergunta: "O ReactDOM nos ajuda __",
            resposta: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            id: 0,
            tipo: InitialCard,
            pergunta: "Usamos o npm para __",
            resposta: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            id: 0,
            tipo: InitialCard,
            pergunta: "Usamos props para __",
            resposta: "passar diferentes informações para componentes"
        },
        {
            id: 0,
            tipo: InitialCard,
            pergunta: "Usamos estado (state) para __",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]

    randomizeCards(listaCartoes);

    return (
        <div className="container">
            <div className="header">
                <img src={loguinho} alt="" />
                <Title />
            </div>

            {listaCartoes.map((card) => <Card><card.tipo cardNumber={card.id + 1} listaCartoes={listaCartoes} done={done} setDone={setDone} /></Card>)}

            <div className="footer">
                <div className="text-content">{done.length}/8 CONCLUÍDAS </div>
                <div className="done">{done.map((icon) => icon)}</div>
            </div>

            
        </div>
    )
}