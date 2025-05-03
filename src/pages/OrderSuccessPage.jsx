import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16">
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold text-slate-800 mb-4">Siparişiniz başarıyla oluşturuldu!</h1>
      <p className="text-slate-600 mb-6">
        Mail adresinize sipariş bilgilendirme maili gönderildi. İlginiz için teşekkür ederiz 
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default OrderSuccessPage;
