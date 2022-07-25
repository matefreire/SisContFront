import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Api } from '../../services/api';

export default function FormClientes({ id }) {

  const [cliente, setcliente] = useState("");
  const [produto, setproduto] = useState("");
  const [quantidade, setquantidade] = useState("");
  const [erro, setErro] = useState(false);
  const router = useRouter();
  const api = new Api('/api/clientes/');

  useEffect(() => {
    try {
      if (id != undefined) {
        api.listar(id)
          .then(res => setNome(res.data['vendas']))
          .catch(err => setErro("Erro ao recuperar entidade!"));
      }
    } catch (erro) {
      setErro("Erro ao recuperar entidade!");
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const vendas = { id: id, clientes:clientes, produto:produto};
      api.salvar(vendas)
        .then(res => router.push('/vendas'))
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
      setErro("Erro ao salvar a Venda!");
    }
  };

  return <Container>
    {erro}
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="clientes">
        <Form.Label>Nome</Form.Label>
        <Form.Control name="clinetes" placeholder="Entre com o nome do cliente da venda!"
          required defaultValue={nome}
          onChange={(e) => setNome(e.target.value)}

        />
        
        <Form.Control produto="produto" placeholder="Entre com o nome do rproduto"
          required defaultValue={cpf}
          onChange={(e) => setProduto(e.target.value)}

        />

        <Form.Control quantidade="quantidade" placeholder="Entre com a quantidade do produto"
          required defaultValue={email}
          onChange={(e) => setquantidade(e.target.value)}

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