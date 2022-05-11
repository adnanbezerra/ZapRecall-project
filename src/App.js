import Title from "./components/shared/Title"
import React from "react";
import Zap from "./components/Zap";

function MainScreen(props) {
    return (
        <div className="container">
            <img src="./images/logo.png" alt="" />
            <Title />

            <button className="start" onClick={props.startZap}>Iniciar Recall!</button>
        </div>
    )
}

export default function App() {
    // const [tela, setTela] = React.useState(<MainScreen startZap={startZap}/>);
    const [tela, setTela] = React.useState(<Zap />);

    function startZap() {
        setTela(<Zap />)
    }

    console.log(tela);

    return (
        <>
            {tela}
        </>
    )
}