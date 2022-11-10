import AnsweredCardRed from "./AnsweredCards/AnsweredCardRed";
import AnsweredCardGreen from "./AnsweredCards/AnsweredCardGreen";
import AnsweredCardOrange from "./AnsweredCards/AnsweredCardOrange";
import React from "react";


export default function CardAnswer({ answerText, cardNumber, done, setDone, listaCartoes }) {
    const [carta, setCarta] = React.useState(true);
    const [green, setGreen] = React.useState(false);
    const [red, setRed] = React.useState(false);
    const [orange, setOrange] = React.useState(false);


    function lembrei() {
        setDone([...done, <ion-icon name="checkmark-circle" class='green'></ion-icon>]);

        setGreen(true)

        setCarta(false);
    }

    function naoLembrei() {
        setDone([...done, <ion-icon name="close-circle" class='red'></ion-icon>]);

        setRed(true)
        console.log(red)

        setCarta(false);
    }

    function quaseLembrei() {
        setDone([...done, <ion-icon name="help-circle" class='orange'></ion-icon>]);

        setOrange(true);
        console.log(orange);

        setCarta(false);
    }


    function getAnsweredCard() {
        if (green) {
            return <AnsweredCardGreen cardNumber={cardNumber} />
        }
        if (orange) return <AnsweredCardOrange cardNumber={cardNumber} />
        if (red) return <AnsweredCardRed cardNumber={cardNumber} />
    }

    return (
        <>
            {carta ?
                <>
                    <div className="cardAnswer">
                        <div className="text-question">{answerText}</div>

                        <div className="buttons">
                            <button className="naoLembrei" onClick={naoLembrei} ><div className="text-button">Não lembrei</div></button>
                            <button className="quase" onClick={quaseLembrei} ><div className="text-button">Quase não lembrei</div></button>
                            <button className="zap" onClick={lembrei} ><div className="text-button">Zap!</div></button>
                        </div>
                    </div>
                </>
                : getAnsweredCard()
            }
        </>)
}
