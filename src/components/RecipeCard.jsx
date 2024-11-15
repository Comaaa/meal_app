import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.title} />
        <h3>{recipe.title}</h3>
      </Link>
    </div>
  );
}

export default RecipeCard;
