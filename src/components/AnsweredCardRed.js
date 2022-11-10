export default function AnsweredCardRed({ cardNumber }) {
    return (
        <div className="initialCard red">
            <div className="red-text">Pergunta {cardNumber}</div>
            <ion-icon name="close-circle" class='red'></ion-icon>
        </div>
    )
}
