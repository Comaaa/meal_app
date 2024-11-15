import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await axios(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(result.data.categories);
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-list">
      <h2>Catégories</h2>
      {categories.map((category) => (
        <div key={category.idCategory}>
          <Link to={`/category/${category.strCategory}`}>
            <h3>{category.strCategory}</h3>
          </Link>
          <img src={category.strCategoryThumb} alt={category.strCategory} />
        </div>
      ))}
    </div>
  );
}

export default Category;
