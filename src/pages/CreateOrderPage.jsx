import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AddressStep from "../components/CreateOrder/AddressStep";
import OrderSummaryBox from "../components/Cart/OrderSummaryBox";
import CreditCardForm from "../components/CreateOrder/CreditCardForm";
import { toast } from "react-toastify";
import SavedCards from "../components/CreateOrder/SavedCards";

const CreateOrderPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const productTotal = cart.reduce((acc, item) => {
    return acc + item.product.price * item.count;
  }, 0);

  const shippingPrice = 29.99;

  const handleOrderSubmit = async () => {
    setIsSubmitting(true);
    toast.info("Sipariş oluşturuluyor...");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Sipariş başarıyla oluşturuldu!");
    history.push("/order-success");

    setIsSubmitting(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
        {/* Sol kısım: Adres ve Ödeme Adımı */}
        <div className="flex-1 space-y-10">
          {/* Adım 1: Adres */}
          <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-6">
              Adım 1: Adres Bilgileri
            </h1>
            <AddressStep />
          </div>

          {/* Adım 2: Ödeme */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Adım 2: Ödeme Bilgileri
            </h2>
            <CreditCardForm />
            <SavedCards/>
          </div>
        </div>

        {/* Sağ kısım: Sipariş Özeti */}
        <div className="w-full md:w-[320px] space-y-4">
          <OrderSummaryBox
            productTotal={productTotal}
            shippingPrice={shippingPrice}
            discountText="150 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)"
            onSubmit={handleOrderSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default CreateOrderPage;
