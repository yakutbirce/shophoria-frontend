import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../Shop/Breadcrumb";
import Clients from "../Clients";
import ProductDetailContent from "./ProductDetailContent";
import ProductDescriptionSection from "./ProductDescriptionSection";
import BestsellerProducts from "./BestsellerProducts";
import Spinner from "../common/Spinner";
import { fetchProductDetail } from "../../store/reducers/productReducer";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory(); 

  const product = useSelector((state) => state.product.productDetail);
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    dispatch(fetchProductDetail(productId));
  }, [dispatch, productId]);

  if (fetchState === "FETCHING" || !product) {
    return <Spinner />;
  }

  return (
    <section className="bg-neutral-50 pb-20">
     
      <div className="w-full max-w-[1050px] mx-auto px-4 md:px-6 pt-6">
        {/* BACK TO SHOP */}
        <button
          onClick={() => history.goBack()} 
          className="text-sm text-sky-500 hover:underline mb-2 block ml-2"
        >
          ← Back to Shop
        </button>

        <Breadcrumb />
      </div>

      <ProductDetailContent product={product} />
      <ProductDescriptionSection />
      <BestsellerProducts />
      <Clients />
    </section>
  );
};

export default ProductDetailPage;
