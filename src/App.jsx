import "./App.css";
import React from "react";

import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro"></FamiliaMembro>
          <FamiliaMembro nome="Ana"></FamiliaMembro>
          <FamiliaMembro nome="José"></FamiliaMembro>
        </Familia>
      </Card>

      <Card titulo="Exemplo de Card" color="#FA6900">
        <Aleatorio min={1} max={60}></Aleatorio>
      </Card>

      <Card titulo="Com Parâmetro" color="#E94C6F">
        <ComParametro
          titulo="Situação do aluno:"
          aluno="Maria"
          nota={9.2}
        ></ComParametro>
      </Card>

      <Card titulo="Primeiro Componente" color="#E8B71A">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
