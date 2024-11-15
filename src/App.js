import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MealCard from "./pages/MealCard";
import MealDetail from "./pages/MealDetailPage";
import RandomMeal from "./pages/RandomMeal";
import Category from "./pages/Category";
import MealCategoryList from "./pages/MealCategoryList";
import IngredientPage from "./pages/IngredientPage";
import IngredientRecipe from "./pages/IngredientRecipe";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:category" element={<MealCategoryList />} />
          <Route path="/meal/:id" element={<MealDetail />} />
          <Route path="/random" element={<RandomMeal />} />
          <Route path="/MealCard" element={<MealCard />} />
          <Route path="/ingredients" element={<IngredientPage />} />
          <Route
            path="/ingredient/:ingredient"
            element={<IngredientRecipe />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
