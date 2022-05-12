import MainScreen from "./components/MainScreen";
import React from "react";
import Zap from "./components/Zap";

import "./css/reset.css"
import "./css/style.css"

export default function App() {
    const [tela, setTela] = React.useState('zap');
    // const [tela, setTela] = React.useState(<Zap />);

    return (
        <>
            {tela === 'zap' ? <MainScreen setTela={setTela} /> : <Zap />}
        </>
    )
}