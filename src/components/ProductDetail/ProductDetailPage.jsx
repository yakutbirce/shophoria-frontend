import React from "react";
import Breadcrumb from "../Shop/Breadcrumb"; 
import Clients from "../Clients";
import Footer from "../Footer/Footer";
import ProductDetailContent from "./ProductDetailContent";
import ProductDescriptionSection from "./ProductDescriptionSection";
import BestsellerProducts from "./BestsellerProducts";

const ProductDetailPage = () => {
  return (
    <section className="bg-neutral-50 pb-20">
      {/* Breadcrumb */}
      <div className="w-full max-w-[1050px] mx-auto px-4 md:px-6 pt-6">
        <Breadcrumb />
      </div>

     {/* Ana içerik: Slider + Info */}
<ProductDetailContent />
<ProductDescriptionSection  />
<BestsellerProducts />  
      {/* Clients*/}
      <Clients />
   
    </section>
  );
};

export default ProductDetailPage;
