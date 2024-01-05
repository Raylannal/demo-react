import "./App.css";
import React from "react";

import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelasProdutos from "./components/repeticoes/TabelasProdutos";
import ListaAlunos from "./components/repeticoes/ListaAlunos";
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
      <Card titulo="Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="Rederização Condicional" color="#982395">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
      </Card>

      <Card titulo="Desafio Repetições" color="#3A9AD9">
        <TabelasProdutos></TabelasProdutos>
      </Card>

      <Card titulo="Repetições" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>

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
