import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo = "Situação do aluno:"
            aluno = "Maria"
            nota = {9.2}
            ></ComParametro>
    </div>,
    document.getElementById('root')
)