export default function AnsweredCardOrange({ cardNumber }) {
    return (
        <div className="initialCard orange">
            <div className="orange-text">Pergunta {cardNumber}</div>
            <ion-icon name="help-circle" class='orange'></ion-icon>
        </div>
    )
}
