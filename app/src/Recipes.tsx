import React from "react";
import recipeIndex from "./content/index.json";

export const recipes = recipeIndex.map((recipe) => ({
  name: recipe,
  component: React.lazy(async () => await import("./content/" + recipe)),
}));

export function getRecipe(name: string) {
  const obj = recipes.find((c) => c.name === name);
  return obj?.component;
}
