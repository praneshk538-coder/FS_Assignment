import React, { useEffect, useState } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data.recipes));
  }, []);

  return (
    <>
      <h2>Recipes</h2>
      {recipes.slice(0, 5).map(recipe => (
        <div key={recipe.id}>
          <p><b>ID:</b> {recipe.id}</p>
          <p><b>Name:</b> {recipe.name}</p>
          <p><b>Ingredients:</b> {recipe.ingredients.join(", ")}</p>
        </div>
      ))}
    </>
  );
}

export default Recipes;