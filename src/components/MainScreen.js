import Title from "./template/Title"
import logo from "./images/logo.png"

export default function MainScreen({ setTela }) {
    return (
        <div className="container-start">
            <img src={logo} alt="" />
            <Title />

            <button className="start" onClick={() => setTela('start')}>Iniciar Recall!</button>
        </div>
    )
}
