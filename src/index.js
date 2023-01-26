import React from "react";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
  </React.StrictMode>
);