import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

function RandomMeal() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchRandomMeal = async () => {
      const result = await axios(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setMeal(result.data.meals[0]);
    };
    fetchRandomMeal();
  }, []);

  if (!meal)
    return (
      <div>
        Le repas random arrive, patiente non ? c'est dingue de pas vouloir
        patienter comme ça !
      </div>
    );

  return (
    <div className="random-meal">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>
    </div>
  );
}

export default RandomMeal;
