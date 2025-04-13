import React from "react";
import { Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container";
import Clients from "./components/Clients";
import ShopCards from "./components/ShopCards";
import ProductCards from "./components/ProductCards";
import Content7 from "./components/Content7";
import Features12 from "./components/Features12/Features12";
import BlogSection from "./components/Blog/BlogSection";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Container />
          <Clients />
          <ShopCards />
          <ProductCards />
          <Content7 />
          <Features12 />
          <BlogSection />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
