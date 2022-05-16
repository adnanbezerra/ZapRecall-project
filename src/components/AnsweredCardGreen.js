export default function AnsweredCardGreen({cardNumber}) {
    return (
        <div className="initialCard green">
            <div className="green-text">Pergunta {cardNumber}</div>
            <ion-icon name="checkmark-circle" class="green"></ion-icon>
        </div>
    )
}