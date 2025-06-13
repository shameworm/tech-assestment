import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RecipeInfoPage } from "./pages/RecipeInfo";

const RecipeList = lazy(() =>
  import("./pages/RecipeList").then((module) => ({
    default: module.RecipeList,
  }))
);

export const router = createBrowserRouter([
  {
    id: "root",
    children: [
      {
        index: true,
        element: <RecipeList />,
      },
      {
        path: "recipes/:id",
        element: <RecipeInfoPage />,
      },
    ],
  },
]);
