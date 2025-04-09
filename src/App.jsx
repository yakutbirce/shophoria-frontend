import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container";
import Clients from "./components/Clients";
import ShopCards from "./components/ShopCards";


function App() {
  return (
    <div>
      <Navbar />
      < Container/>
      <Clients />
      <ShopCards />
    </div>
  );
}

export default App;
