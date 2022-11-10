import Title from "./template/Title";
import Card from "./Card/Card";
import React from 'react';
import loguinho from "./images/loguinho.png";
import InitialCard from "./Card/InitialCard";
import happy from "./images/party.png"
import sad from "./images/sad.png"
import { listaCartoes, randomizeCards } from "./mock/functions";

export default function Zap() {
    const [done, setDone] = React.useState([]);

    function getFooter() {
        return (
            <div className="footer">
                <div className="text-content">{done.length}/8 CONCLUÍDAS </div>
                <div className="done">{done.map((icon) => icon)}</div>
            </div>
        );
    };

    function footerFinal() {
        if (!done.includes(<ion-icon name="close-circle" class='red'></ion-icon>)) {
            return getVictoryMessage();
        } else {
            return getNotVictoryMessage();
        }
    }

    function getVictoryMessage() {
        return (
            <>
                <div className="footerFinal">
                    <div className="finalTitle"><img src={happy} alt="" />Parabéns!</div>
                    <div className="finalText">Você não esqueceu de nenhum flashcard!</div>
                </div>
            </>
        );
    }

    function getNotVictoryMessage() {
        return (
            <>
                <div className="footerFinal">
                    <div className="finalTitle"><img src={sad} alt="" />Putz...</div>
                    <p className="finalText">Ainda faltam alguns...</p>
                    <p className="finalText">Mas não desanime!</p>
                </div>
            </>
        )
    }

    randomizeCards(listaCartoes);

    return (
        <div className="container">
            <div className="header">
                <img src={loguinho} alt="" />
                <Title />
            </div>

            {listaCartoes.map((card) => <Card><InitialCard cardNumber={card.id + 1} listaCartoes={listaCartoes} done={done} setDone={setDone} /></Card>)}

            {getFooter()}

            {done.length !== 8 ? <></> : footerFinal()}
        </div>
    );
}
