import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MealCard from "./MealCard";
import "../styles.css";

function Home() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const result = await axios(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      setMeals(result.data.meals.slice(0, 6)); // Prendre les 6 premiers meals
    };

    const fetchCategories = async () => {
      const result = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(result.data.categories.slice(0, 6)); // Prendre les 6 premières catégories
    };

    const fetchIngredients = async () => {
      const result = await axios(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
      );
      setIngredients(result.data.meals.slice(0, 6)); // Prendre les 6 premiers ingrédients
    };

    fetchMeals();
    fetchCategories();
    fetchIngredients();
  }, []);

  return (
    <div className="home">
      <h2>Les 6 premiers Meals</h2>
      <div className="meal-list">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      <h2>Les 6 premières catégories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div key={category.strCategory} className="category-card">
            <Link to={`/category/${category.strCategory}`}>
              <h3>{category.strCategory}</h3>
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="category-image"
              />
            </Link>
          </div>
        ))}
      </div>

      <h2>Les 6 premiers ingrédients</h2>
      <div className="ingredient-list">
        {ingredients.map((ingredient) => (
          <div key={ingredient.strIngredient} className="ingredient-card">
            <h3>{ingredient.strIngredient}</h3>
            <img
              src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
              alt={ingredient.strIngredient}
              className="ingredient-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
