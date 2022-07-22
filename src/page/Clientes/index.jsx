import React from "react";

import "./clientes.css";
import "./main";


const LoginPage = () => {
    return (

        <>
  <div id="listaRegistros">
    <div style={{ display: "flex" }}>
      <input
        style={{ flex: 1 }}
        placeholder="PESQUISAR"
        autofocus=""
        id="inputPesquisa"
      />
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Fone</th>
          <th>CPF</th>
          <th>E-mail</th>
          <th />
        </tr>
      </thead>
      <tbody id="listaRegistrosBody" />
    </table>
    <div>
      <button onclick="vizualizar('cadastro', true)">Novo usuário</button>
    </div>
  </div>
  <form id="cadastroRegistro">
    <div className="label">
      <div>ID</div>
      <div>
        <input type="number" readOnly="" id="id" />
      </div>
    </div>
    <div className="label">
      <div>Nome</div>
      <div>
        <input id="nome" />
      </div>
    </div>
    <div className="label">
      <div>Fone</div>
      <div>
        <input type="tel" id="fone" />
      </div>
    </div>
    <div className="label">
      <div>CPF</div>
      <div>
        <input type="tel" id="cpf" />
      </div>
    </div>
    <div className="label">
      <div>E-mail</div>
      <div>
        <input type="text" id="email" />
      </div>
    </div>
    <div>
      <button>Salvar</button>
      <button onclick="vizualizar('lista')" className="cinza" type="button">
        Cancelar
      </button>
    </div>
  </form>
</>

);
}

export default Clientes;