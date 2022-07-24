import React from "react";

import "./home.css";


const HomePage = () => {
  return (

    <nav className="navMenu">
      <a href="#">Home</a>
      <a href="#">Clientes</a>
      <a href="#">Estoque</a>
      <a href="#">Contas</a>
      <div className="dot" />
    </nav>

  );
}

export default HomePage;