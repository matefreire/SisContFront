import React from "react";

import "./estoque.css";
import "./main";

const HomePage = () => {
	return (
		<>
			<h1>Cadastro e Listagem Estoque</h1>
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
							<th>Codigo</th>
							<th>Nome</th>
							<th>Marca</th>
							<th>Quantidade</th>
							<th />
						</tr>
					</thead>
					<tbody id="listaRegistrosBody" />
				</table>
				<div>
					<button onclick="vizualizar('cadastro', true)">Novo Produto</button>
				</div>
			</div>
			<form id="cadastroRegistro">
				<div className="label">
					<div>Codigo</div>
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
					<div>Marca</div>
					<div>
						<input type="text" id="marca" />
					</div>
				</div>
				<div className="label">
					<div>Quantidade</div>
					<div>
						<input type="number" id="qtde" />
					</div>
				</div>
				<div>
					<button>Gravar</button>
					<button onclick="vizualizar('lista')" className="cinza" type="button">
						Cancelar
					</button>
				</div>
			</form>
		</>
	);
}

export default HomePage;
