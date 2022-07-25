import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Api } from '../../services/api';

export default function FormClientes({ id }) {

  const [contas, setcontas] = useState("");
  const [banco, setbanco] = useState("");
  const [conta, setconta] = useState("");
  const [agencia, setagencia] = useState("");
  const [erro, setErro] = useState(false);
  const router = useRouter();
  const api = new Api('/api/contas/');

  useEffect(() => {
    try {
      if (id != undefined) {
        api.listar(id)
          .then(res => setNome(res.data['contas']))
          .catch(err => setErro("Erro ao recuperar entidade!"));
      }
    } catch (erro) {
      setErro("Erro ao recuperar entidade!");
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const vendas = { id: id, contas:contas, banco:banco};
      api.salvar(contas)
        .then(res => router.push('/contas'))
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
      setErro("Erro ao salvar a Conta!");
    }
  };

  return <Container>
    {erro}
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="contas">
        <Form.Label>Nome</Form.Label>
        <Form.Control name="contas" placeholder="Entre com o nome do Banco!"
          required defaultValue={conta}
          onChange={(e) => setBanco(e.target.value)}

        />
        
        <Form.Control conta="conta" placeholder="Entre com o numero da conta "
          required defaultValue={agencia}
          onChange={(e) => setConta(e.target.value)}

        />

        <Form.Control quantidade="quantidade" placeholder="Entre com a quantidade do produto"
          required defaultValue={agencia}
          onChange={(e) => setAgencia(e.target.value)}

        />
      </Form.Group>

      <Row className="justify-content-end mt-3">
        <Col md="auto">
          <Button variant="outline-secondary" type="button" onClick={() => router.push('/contas')}>
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

Formcontas.defaultProps = {
  id: undefined
};