import React from "react";
import { useLocation ,Switch, Route } from "react-router-dom";
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
import ShopPage from './components/Shop/ShopPage';
import ShopMobileNavbar from "./components/Navbar/ShopMobileNavbar";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";


function App() {
  const location = useLocation();
  return (
    <>
    
     {/* Koşullu Navbar */}
     {location.pathname !== "/shop" && <Navbar />}
      <Switch>
        {/* Anasayfa */}
        <Route exact path="/">
          <Container />
          <Clients />
          <ShopCards />
          <ProductCards />
          <Content7 />
          <Features12 />
          <BlogSection />
        </Route>

        {/* Login Sayfası */}
        <Route path="/login">
          <div className="text-center text-2xl mt-20">Login Page</div>
        </Route>

        {/* Search Sayfası */}
        <Route path="/search">
          <div className="text-center text-2xl mt-20">Search Page</div>
        </Route>

        {/* Cart Sayfası */}
        <Route path="/cart">
          <div className="text-center text-2xl mt-20">Cart Page</div>
        </Route>

        <Route path="/shop">
  <>
    {/* Shop'a özel mobil navbar */}
    <div className="md:hidden">
      <ShopMobileNavbar />
    </div>

    
    <div className="hidden md:block">
      <DesktopNavbar />
    </div>

    {/* Shop içeriği */}
    <ShopPage />
  </>
</Route>


<Route path="/featured">
  <div className="text-center text-2xl mt-20 font-semibold text-slate-700">
    Featured Page – Coming Soon 
  </div>
</Route>

<Route path="/products">
  <div className="text-center text-2xl mt-20 font-semibold text-slate-700">
    All Products – Coming Soon
  </div>
</Route>

{/* Footer linkleri */}
<Route path="/about-us">
          <div className="text-center text-2xl mt-20">About Us Page</div>
        </Route>
        <Route path="/carrier">
          <div className="text-center text-2xl mt-20">Career Page</div>
        </Route>
        <Route path="/we-are-hiring">
          <div className="text-center text-2xl mt-20">We're Hiring Page</div>
        </Route>
        <Route path="/blog">
          <div className="text-center text-2xl mt-20">Blog Page</div>
        </Route>
        <Route path="/business-marketing">
          <div className="text-center text-2xl mt-20">Business Marketing Page</div>
        </Route>
        <Route path="/user-analytic">
          <div className="text-center text-2xl mt-20">User Analytic Page</div>
        </Route>
        <Route path="/live-chat">
          <div className="text-center text-2xl mt-20">Live Chat Page</div>
        </Route>
        <Route path="/unlimited-support">
          <div className="text-center text-2xl mt-20">Unlimited Support Page</div>
        </Route>
        <Route path="/ios-and-android">
          <div className="text-center text-2xl mt-20">iOS & Android Page</div>
        </Route>
        <Route path="/watch-a-demo">
          <div className="text-center text-2xl mt-20">Watch a Demo Page</div>
        </Route>
        <Route path="/customers">
          <div className="text-center text-2xl mt-20">Customers Page</div>
        </Route>
        <Route path="/api">
          <div className="text-center text-2xl mt-20">API Page</div>
        </Route>


      </Switch>
      <Footer />
    </>
  );
}

export default App;
