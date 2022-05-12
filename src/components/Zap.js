import Title from "./shared/Title";
import InitialCard from "./InitialCard";
import CardVerse from "./CardVerse"
import React from 'react';
import loguinho from "./images/loguinho.png";

function randomizeCards(array) {
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

    console.log(array);
    return array;
}

export default function Zap() {

    // Tá precisando embaralhar isso, meu guerreiro
    const listaCartoes = [
        {
            id: 0,
            cartao: function () { return <InitialCard cardNumber={this.id + 1} /> },
            pergunta: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript"
        },
        {
            id: 0,
            cartao: function () { return <InitialCard cardNumber={this.id + 1} /> },
            pergunta: "O React é __ ",
            resposta: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            id: 0,
            cartao: function () { return <InitialCard cardNumber={this.id + 1} /> },
            pergunta: "Componentes devem iniciar com __ ",
            resposta: "letra maiúscula"
        },
        {
            id: 0,
            cartao: function () { return <InitialCard cardNumber={this.id + 1} /> },
            pergunta: "Podemos colocar __",
            resposta: "expressões"
        },
        {
            id: 0,
            cartao: function () { return <InitialCard cardNumber={this.id + 1} /> },
            pergunta: "O ReactDOM nos ajuda __",
            resposta: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            id: 0,
            cartao: function () { return <InitialCard cardNumber={this.id + 1} /> },
            pergunta: "Usamos o npm para __",
            resposta: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            id: 0,
            cartao: function () { return <InitialCard cardNumber={this.id + 1} /> },
            pergunta: "Usamos props para __",
            resposta: "passar diferentes informações para componentes"
        },
        {
            id: 0,
            cartao: function () { return <InitialCard cardNumber={this.id + 1} /> },
            pergunta: "Usamos estado (state) para __",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]

    randomizeCards(listaCartoes);

    const [quantity, setQuantity] = React.useState(0);
    const [done, setDone] = React.useState([])
    const [cards, setCards] = React.useState(listaCartoes);


    return (
        <div className="container">
            <div className="header">
                <img src={loguinho} alt="" />
                <Title />
            </div>
            
            {cards.map((card) => card.cartao())}
            {/* <CardVerse /> */}

            <div className="footer">
                <div className="text-content">{quantity}/4 CONCLUÍDAS </div>
                <div className="done">{done}</div>
            </div>
        </div>
    )
}