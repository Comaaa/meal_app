import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function MealCard({ meal }) {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>
      <Link to={`/meal/${meal.idMeal}`}>Voir les détails</Link>
    </div>
  );
}

export default MealCard;
