import React from "react";
import { Plus, ChevronRight } from "lucide-react";
import { useHistory } from "react-router-dom";

const OrderSummaryBox = ({
  productTotal = 0,
  shippingPrice = 0,
  discountText = "150 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)",
}) => {
  const history = useHistory();
  const grandTotal = productTotal + shippingPrice;

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-5 text-sm mt-10 md:mt-0 md:w-[320px]">
      <h2 className="text-lg font-semibold mb-4">Sipariş Özeti</h2>

      <div className="space-y-2 text-slate-700">
        <div className="flex justify-between">
          <span>Ürünün Toplamı</span>
          <span>{productTotal.toFixed(2)} TL</span>
        </div>

        <div className="flex justify-between">
          <span>Kargo Toplamı</span>
          <span>{shippingPrice.toFixed(2)} TL</span>
        </div>

        <div className="text-[13px] text-sky-600 font-medium mt-1">
          {discountText}
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-semibold text-base text-sky-600">
          <span>Toplam</span>
          <span>{grandTotal.toFixed(2)} TL</span>
        </div>
      </div>

      {/* İndirim kodu butonu */}
      <button
        className=" cursor-pointer mt-6 w-full flex items-center justify-center gap-2 border border-sky-600 text-sky-600 hover:bg-sky-50 font-medium py-2 rounded-md transition"
        disabled
      >
        <Plus className="w-4 h-4" />
        İNDİRİM KODU GİR
      </button>

      {/* Sepeti Onayla butonu */}
      <button
        onClick={() => history.push("/create-order")}
        className="mt-3 w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-md font-medium transition"
      >
        SEPETİ ONAYLA
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default OrderSummaryBox;
