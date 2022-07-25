import { useRouter } from "next/router";
import { Navbar, Nav} from 'react-bootstrap';
import { useEffect, useState } from "react";
import isAuthenticated from '../../services/isAuthenticated';

export default function TopBar() {
  const [montar, setMontar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    var auth = isAuthenticated();
    if (!auth) {
      router.push('/login');
    }
    setMontar(auth);
  });

  return (montar && 
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">
          <Nav.Link href="/disciplinas">Clientes</Nav.Link>
        </Nav>

        <Nav className="me-auto">
          <Nav.Link href="/disciplinas">Estoque</Nav.Link>
        </Nav>

        <Nav className="me-auto">
          <Nav.Link href="/disciplinas">Contas</Nav.Link>
        </Nav>

        <Nav className="me-auto">
          <Nav.Link href="/disciplinas">Usuarios</Nav.Link>
        </Nav>

        <Nav className="me-auto">
          <Nav.Link href="/disciplinas">Despesas</Nav.Link>
        </Nav>

        <Nav className="me-auto">
          <Nav.Link href="/disciplinas">Receitas</Nav.Link>
        </Nav>

        <Nav className="me-auto">
          <Nav.Link href="/disciplinas">Empenhos</Nav.Link>
        </Nav>

        <Nav className="me-auto">
          <Nav.Link href="/disciplinas">Liquidações</Nav.Link>
        </Nav>

        <Nav className="me-auto">
          <Nav.Link href="/disciplinas">Pagamentos</Nav.Link>
        </Nav>

        <Nav className="me-auto">
          <Nav.Link href="/disciplinas">Vendas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}



