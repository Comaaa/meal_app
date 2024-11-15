import React, { useEffect, useState } from "react";
import axios from "axios";
import MealCard from "./MealCard";
import { useParams } from "react-router-dom";

function IngredientRecipes() {
  const { ingredient } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealsByIngredient = async () => {
      try {
        const result = await axios(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        setMeals(result.data.meals);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des recettes par ingrédient:",
          error
        );
      }
    };

    fetchMealsByIngredient();
  }, [ingredient]);

  return (
    <div className="meal-list container">
      <h2>Recettes avec l'ingrédient : {ingredient}</h2>
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default IngredientRecipes;
