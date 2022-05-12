import Title from "./shared/Title"
import logo from "./images/logo.png"

export default function MainScreen( props ) {
    return (
        <div className="container-start">
            <img src={logo} alt="" />
            <Title />

            <button className="start" onClick={() => props.setTela('eai')}>Iniciar Recall!</button>
        </div>
    )
}