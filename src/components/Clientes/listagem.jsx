import { Table, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Api } from '../../services/api';

export default function Clientes({ mostrar }) {
  const [clintes, setClientes] = useState([]);
  const router = useRouter();
  const api = new Api('/api/clientes');

  useEffect(() => listar(), []);

  const listar = () => {
    api.listar()
      .then(res => {
        setClientes(res.data);
      })
      .catch(err => router.push('/clientes'));
  };

  const handleDelete = (id) => {
    if (confirm("Deseja remover esse cliente?")) {
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
      <td>Nome</td>
      <td>Cpf</td>
      <td>Email</td>
      {mostrar && <td style={{ width: 200 }}>Ações</td>}
    </tr>
  </thead>
  <tbody>
    {clintes?.map((disc) => (
      <tr key={disc.id}>
        <td>{disc.id}</td>
        <td>{disc.nome}</td>
        <td>{disc.cpf}</td>
        <td>{disc.email}</td>
        {mostrar && <td><Button variant="info" href={"/disciplinas/" + disc.id}>Editar</Button><Button className="ml-2" onClick={() => handleDelete(disc.id)} variant="danger">Remover</Button></td>}
      </tr>
    ))
    }
  </tbody>
</Table>;
}

Clientes.defaultProps = {
mostrar: false
};