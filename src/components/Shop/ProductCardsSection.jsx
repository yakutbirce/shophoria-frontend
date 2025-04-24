import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/reducers/productReducer";
import { Link, useParams } from "react-router-dom";
import Spinner from "../common/Spinner";

// Ürün Kartı
const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center gap-3 px-2 md:px-4 mb-14">
      <div className="w-full aspect-[348/427] md:aspect-[239/300] max-w-[348px] md:max-w-[239px] bg-gray-300 overflow-hidden">
        <img
          src={product.images?.[0]?.url}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center">
        <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
      </div>

      <div className="flex gap-2 items-center">
        {product.oldPrice && (
          <span className="text-gray-400 line-through text-sm">
            ${product.oldPrice}
          </span>
        )}
        <span className="text-green-600 font-semibold text-sm">
          ${product.price}
        </span>
      </div>

      {product.colors?.length > 0 && (
        <div className="flex gap-2">
          {product.colors.map((color, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductCardsSection = ({ currentPage }) => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchProducts(categoryId));
  }, [dispatch, categoryId]);

  const productList = useSelector((s) => s.product.productList);
  const fetchState = useSelector((s) => s.product.fetchState);

  if (!Array.isArray(productList)) {
    console.warn("productList bir array değil!", productList);
    return null;
  }

  if (fetchState === "FETCHING") {
    return <Spinner />;
  }

  if (fetchState === "FAILED") {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 font-semibold text-lg mb-4">
          Ürünler yüklenemedi. Lütfen daha sonra tekrar deneyin.
        </p>
        <button
          onClick={() => dispatch(fetchProducts())}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Yeniden Dene
        </button>
      </div>
    );
  }
  

  const productsPerPage = 12;
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = productList.slice(startIndex, startIndex + productsPerPage);

  return (
    <section className="flex flex-col items-center px-4 py-10 bg-white">
      <div className="flex flex-wrap justify-start max-w-[1300px]">
        {currentProducts.map((product) => (
          <div key={product.id} className="w-full md:w-1/4">
            <Link to={`/product/${product.id}`} className="block hover:cursor-pointer">
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCardsSection;
