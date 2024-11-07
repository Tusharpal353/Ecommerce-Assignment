import React from "react";

import Body from "./Components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPage from "./Components/CardPage";
import { Provider } from "react-redux";
import cartStore from "./Store/cartStore";
import CartPage from "./Components/CartPage";
const App = () => {
  return (
    <>
    <Provider store={cartStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/product/:id" element={<CardPage />}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
