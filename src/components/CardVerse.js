import setinha from "./images/setinha.png"
import CardAnswer from "./CardAnswer"
import React from "react";

export default function CardVerse({ pergunta, cardNumber, listaCartoes, done, setDone }) {

    const [carta, setCarta] = React.useState(true);

    return (
        <>
            {carta ?
                <>
                    <div className="cardVerse">
                        <div className="text-question">{pergunta}</div>
                        <img onClick={() => setCarta(false)} className="setinha" src={setinha} alt="" />
                    </div>
                </>
                : <CardAnswer answerText={listaCartoes[cardNumber - 1].resposta} cardNumber={cardNumber} done={done} setDone={setDone} />}
        </>

    )
}