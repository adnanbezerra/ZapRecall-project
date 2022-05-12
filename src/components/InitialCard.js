export default function InitialCard(props) {
    return (
        <div className="initialCard">
            <div className="text">Pergunta {props.cardNumber}</div>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}