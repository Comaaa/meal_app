import React, { useEffect, useState } from "react";
import "../";
import "../styles.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des recettes :", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Chargement...</div>;

  if (recipes.length === 0) return <p>Aucune recette trouvée.</p>;

  return (
    <div className="recipe-list">
      <h1 className="recipe-title">Nos Recettes</h1>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2 className="recipe-name">{recipe.title}</h2>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image"
            />
            <p className="recipe-category">Catégorie : {recipe.category}</p>
            <p className="recipe-instructions">
              <strong>Instructions :</strong>{" "}
              {recipe.instructions.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
