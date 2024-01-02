/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

export default (_) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <ComParametro
      titulo="Situação do aluno:"
      aluno="Maria"
      nota={9.2}
    ></ComParametro>
    <Primeiro></Primeiro>
  </div>
);
