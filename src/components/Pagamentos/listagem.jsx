import { Table, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Api } from '../../services/api';

export default function Vendas({ mostrar }) {
  const [vendas, setVendas] = useState([]);
  const router = useRouter();
  const api = new Api('/api/vendas');

  useEffect(() => listar(), []);

  const listar = () => {
    api.listar()
      .then(res => {
        setvendas(res.data);
      })
      .catch(err => router.push('/vendas'));
  };

  const handleDelete = (id) => {
    if (confirm("Deseja remover esta venda?")) {
      try {
        api.remover(id)
          .then( res => listar())
          .catch(err => alert(err));
      } catch (error) {
        alert(error);
      }
    }
  };

  return <Table striped bordered hover>
  <thead>
    <tr>
      <td>Id</td>
      <td>Cliente</td>
      <td>Produto</td>
      <td>Quantidade</td>
      {mostrar && <td style={{ width: 200 }}>Ações</td>}
    </tr>
  </thead>
  <tbody>
    {clintes?.map((disc) => (
      <tr key={disc.id}>
        <td>{disc.id}</td>
        <td>{disc.cliente}</td>
        <td>{disc.produto}</td>
        <td>{disc.quantidade}</td>
        {mostrar && <td><Button variant="info" href={"/clientes/" + disc.id}>Editar</Button><Button className="ml-2" onClick={() => handleDelete(disc.id)} variant="danger">Remover</Button></td>}
      </tr>
    ))
    }
  </tbody>
</Table>;
}

Vendas.defaultProps = {
mostrar: false
};