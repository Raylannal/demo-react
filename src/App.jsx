/* eslint-disable import/no-anonymous-default-export */
import "./App.css"
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="Exemplo de Card">
        <Aleatorio min={1} max={60}></Aleatorio>
      </Card>

      <Card titulo="Com Parâmetro">
        <ComParametro
          titulo="Situação do aluno:"
          aluno="Maria"
          nota={9.2}
        ></ComParametro>
      </Card>

      <Card titulo="Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
