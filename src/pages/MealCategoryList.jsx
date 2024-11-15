import React, { useEffect, useState } from "react";
import axios from "axios";
import MealCard from "./MealCard";
import { useParams } from "react-router-dom";
import "../styles.css";

function MealCategoryList() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      const result = await axios(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setMeals(result.data.meals);
    };

    fetchMealsByCategory();
  }, [category]);

  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default MealCategoryList;
