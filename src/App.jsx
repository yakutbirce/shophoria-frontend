import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, Switch, Route } from "react-router-dom";
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
import ShopPage from "./components/Shop/ShopPage";
import ShopMobileNavbar from "./components/Navbar/ShopMobileNavbar";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import ProductDetailPage from "./components/ProductDetail/ProductDetailPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ContactPage from "./components/Contact/ContactPage";
import ContactUsPage from "./components/Contact/ContactUsPage";
import AuthChoicePage from "./pages/AuthChoicePage";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import TeamPage from "./components/Team/TeamPage";
import AboutPage from "./components/About/AboutPage";

import { useDispatch } from "react-redux";
import { autoLogin, setUser } from "./store/userSlice";
import { fetchCategories } from "./store/reducers/categoryReducer";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const isShopLayout =
    location.pathname.startsWith("/shop") ||
    location.pathname.startsWith("/product");

  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    const savedUser = localStorage.getItem("userInfo");
    if (savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(autoLogin(token));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      {/* Koşullu Global Navbar */}
      {!isShopLayout && !isContactPage && <Navbar />}

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

        {/* Login / Sign‑Up seçimi */}
        <Route path="/login-register">
          <AuthChoicePage />
        </Route>

        {/* Login formu */}
        <Route path="/login">
          <Login />
        </Route>

        {/* Sign‑Up formu */}
        <Route path="/signup">
          <SignUp />
        </Route>

        {/* Search */}
        <Route path="/search">
          <div className="text-center text-2xl mt-20">Search Page</div>
        </Route>

        {/* Cart */}
        <Route path="/cart">
          <div className="text-center text-2xl mt-20">Cart Page</div>
        </Route>

        {/* SHOP PAGE - kategori seçilmiş hali */}
        <Route path="/shop/:gender/:categoryName/:categoryId">
          <>
            <div className="md:hidden">
              <ShopMobileNavbar />
            </div>
            <div className="hidden md:block">
              <DesktopNavbar />
            </div>
            <ShopPage />
          </>
        </Route>

        {/* SHOP PAGE - sadece /shop */}
        <Route exact path="/shop">
          <>
            <div className="md:hidden">
              <ShopMobileNavbar />
            </div>
            <div className="hidden md:block">
              <DesktopNavbar />
            </div>
            <ShopPage />
          </>
        </Route>

        {/* PRODUCT DETAIL PAGE */}
        <Route path="/product/:id">
          <>
            <div className="md:hidden">
              <ShopMobileNavbar />
            </div>
            <div className="hidden md:block">
              <DesktopNavbar />
            </div>
            <ProductDetailPage />
          </>
        </Route>

        {/* Diğer Sayfalar */}
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

        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/contactus">
          <ContactUsPage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/team">
          <TeamPage />
        </Route>

        {/* Footer Link Sayfaları */}
        <Route path="/about-us">
          <AboutPage />
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

      {!isContactPage && <ScrollToTopButton />}
      {!isContactPage && <Footer />}

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
