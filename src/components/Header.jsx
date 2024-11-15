import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Meals App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/category">Catégories</Link>
        <Link to="/ingredients">Ingrédients</Link>{" "}
        <Link to="/random">Repas Aléatoire</Link>
      </nav>
    </header>
  );
}

export default Header;
