import CardVerse from "./CardVerse";
import React from "react";

export default function InitialCard({ cardNumber, done, setDone, listaCartoes }) {
    const [carta, setCarta] = React.useState(true);

    return (
        <>
            {carta ?
                <>
                    <div className="initialCard" onClick={() => setCarta(false)} >
                        <div className="text">Pergunta {cardNumber}</div>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </>
                : <CardVerse pergunta={listaCartoes[cardNumber - 1].pergunta} cardNumber={cardNumber} listaCartoes={listaCartoes} done={done} setDone={setDone} />}
        </>
    )
}
