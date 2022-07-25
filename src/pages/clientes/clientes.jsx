import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

      try {
        const parametros = {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: username, cpf: cpf, email:email  })
        };
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {erro}
        <Form.Group controlId="form-username">
          <Form.Label>Nome Clientes:</Form.Label>
          <Form.Control type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite o nome do cliente"></Form.Control>
        </Form.Group>

        <Form.Group controlId="form-username">
          <Form.Label>Cpf/Cnpj:</Form.Label>
          <Form.Control type="text"
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite o CPF/CNPJ"></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o E-mail"></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastar
        </Button>
      </Form>
    </Container>
  );
}