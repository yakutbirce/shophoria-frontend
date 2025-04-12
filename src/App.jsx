import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container";
import Clients from "./components/Clients";
import ShopCards from "./components/ShopCards";
import ProductCards from "./components/ProductCards";
import Content7 from "./components/Content7";
import Features12 from "./components/Features12/Features12";


function App() {
  return (
    <div>
      <Navbar />
      < Container/>
      <Clients />
      <ShopCards />
      <ProductCards />
      <Content7 />
      <Features12/>
    </div>
  );
}

export default App;
