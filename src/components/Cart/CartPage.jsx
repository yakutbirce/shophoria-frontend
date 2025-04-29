import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Plus, Minus, Trash2 } from "lucide-react";
import {
  updateCartCount,
  removeProductCompletely,
  toggleProductSelection,
} from "../../store/reducers/cartReducer";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleDelete = (product) => {
    confirmAlert({
      title: "Ürünü Sil",
      message: "Bu ürünü sepetinizden tamamen silmek istiyor musunuz?",
      buttons: [
        {
          label: "Evet",
          onClick: () => dispatch(removeProductCompletely(product)),
        },
        {
          label: "Hayır",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Sepetim ({cart.length} Ürün)
      </h1>

      {cart.length === 0 ? (
        <p className="text-slate-500 text-sm">Sepetiniz şu anda boş.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 border rounded-md shadow-sm"
              >
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <input
  type="checkbox"
  checked={item.selected ?? true}
  onChange={() => dispatch(toggleProductSelection(item.product.id))}
  className="mt-1 w-5 h-5 rounded border-slate-300 text-sky-500 focus:ring-2 focus:ring-sky-300 transition"
 />


                  {/* Ürün görseli ve bilgileri */}
                  <img
                    src={item.product.images?.[0]?.url}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-semibold text-slate-800">
                      {item.product.name}
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      {item.count} x ${item.product.price.toFixed(2)}
                    </p>

                    {/* + / - Butonlar */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          dispatch(updateCartCount(item.product.id, -1))
                        }
                        className="w-8 h-8 flex items-center justify-center border rounded text-slate-700 hover:bg-slate-100 transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-slate-800 font-medium">
                        {item.count}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(updateCartCount(item.product.id, 1))
                        }
                        className="w-8 h-8 flex items-center justify-center border rounded text-slate-700 hover:bg-slate-100 transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Fiyat + Çöp kutusu */}
                <div className="flex items-center gap-4">
                  <p className="text-lg font-bold text-slate-800">
                    ${(item.product.price * item.count).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleDelete(item.product)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Remove from cart"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Seçilen Ürünlerin Toplamı */}
          <div className="mt-10 text-right border-t pt-6">
            <h2 className="text-lg font-semibold text-slate-800">
              Seçilen Ürünlerin Toplamı: $
              {cart
                .filter((item) => item.selected ?? true)
                .reduce((acc, item) => acc + item.product.price * item.count, 0)
                .toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
