import React from "react";
import { useSelector } from "react-redux";
import AddressStep from "../components/CreateOrder/AddressStep";
import OrderSummaryBox from "../components/Cart/OrderSummaryBox";

const CreateOrderPage = () => {
  const cart = useSelector((state) => state.cart.cart);

  const productTotal = cart.reduce((acc, item) => {
    return acc + item.product.price * item.count;
  }, 0);

  const shippingPrice = 29.99;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Adım 1: Adres Bilgileri</h1>

      <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
        {/* Sol kısım: adres adımı */}
        <div className="flex-1">
          <AddressStep />
        </div>

        {/* Sağ kısım: sipariş özeti */}
        <div className="w-full md:w-[320px]">
          <OrderSummaryBox
            productTotal={productTotal}
            shippingPrice={shippingPrice}
            discountText="150 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)"
          />
        </div>
      </div>
    </section>
  );
};

export default CreateOrderPage;
