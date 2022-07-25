import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Api } from '../../services/api';

export default function FormClientes({ id }) {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState(false);
  const router = useRouter();
  const api = new Api('/api/clintes/');

  useEffect(() => {
    try {
      if (id != undefined) {
        api.listar(id)
          .then(res => setNome(res.data['nome']))
          .catch(err => setErro("Erro ao recuperar entidade!"));
      }
    } catch (erro) {
      setErro("Erro ao recuperar entidade!");
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const clientes = { id: id, nome: nome, cpf:cpf };
      api.salvar(clientes)
        .then(res => router.push('/clientes'))
        .catch(err => {
          if (err.response?.data) {
            var msg = "Erro: ";
            Object.entries(err.response?.data).forEach((v) => msg += v[0] + ": " + v[1]);
            setErro(msg);
          } else {
            setErro(err);
          }
        });
    } catch (error) {
      setErro("Erro ao salvar Cliente!");
    }
  };

  return <Container>
    {erro}
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control name="nome" placeholder="Entre com o nome do cliente!"
          required defaultValue={nome}
          onChange={(e) => setNome(e.target.value)}

        />
        
        <Form.Control cpf="cpf" placeholder="Entre com o cpf do cliente!"
          required defaultValue={cpf}
          onChange={(e) => setCpf(e.target.value)}

        />

        <Form.Control email="email" placeholder="Entre com o email do cliente!"
          required defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}

        />
      </Form.Group>

      <Row className="justify-content-end mt-3">
        <Col md="auto">
          <Button variant="outline-secondary" type="button" onClick={() => router.push('/clientes')}>
            Cancelar
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Col>
      </Row>
    </Form>
  </Container>;
}

FormClientes.defaultProps = {
  id: undefined
};