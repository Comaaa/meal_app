import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function IngredientList() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const result = await axios(
          "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
        );
        setIngredients(result.data.meals);
      } catch (error) {
        console.error("Erreur lors de la récupération des ingrédients:", error);
      }
    };

    fetchIngredients();
  }, []);

  return (
    <div className="ingredient-list container">
      <h2>Liste des Ingrédients</h2>
      <div className="ingredient-grid">
        {ingredients.map((ingredient) => (
          <div key={ingredient.idIngredient} className="ingredient-item">
            <Link to={`/ingredient/${ingredient.strIngredient}`}>
              <h3>{ingredient.strIngredient}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientList;
