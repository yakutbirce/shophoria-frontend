import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { X, Trash2, ShoppingCart } from "lucide-react";
import { removeProductCompletely } from "../../store/reducers/cartReducer";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.product.price * item.count;
  }, 0);

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
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative"
        aria-label="Toggle Cart Dropdown"
      >
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cart.length}
        </span>
        <ShoppingCart className="w-6 h-6 text-slate-800" />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg border z-50">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-slate-800 font-semibold text-lg">Your Cart</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close Cart">
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          <div className="max-h-64 overflow-y-auto divide-y">
            {cart.length === 0 ? (
              <p className="p-4 text-slate-500 text-sm">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="p-4 flex justify-between items-center gap-4"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {item.count} x ${item.product.price.toFixed(2)}
                    </p>
                  </div>

                  <img
                    src={item.product.images?.[0]?.url}
                    alt={item.product.name}
                    className="w-12 h-12 object-cover rounded"
                  />

                  <button
                    onClick={() => handleDelete(item.product)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Remove from cart"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="p-4 border-t text-right">
            <p className="text-slate-700 font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>

          <div className="flex justify-between gap-2 px-4 pb-4">
            <Link
              to="/cart"
              className="flex-1 text-center py-2.5 bg-white text-slate-700 font-medium rounded-md border border-slate-300 hover:bg-slate-100 transition"
            >
              Sepete Git
            </Link>
            <Link
              to="/checkout"
              className="flex-1 text-center py-2.5 bg-sky-500 text-white font-medium rounded-md hover:bg-sky-600 transition"
            >
              Siparişi Tamamla
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
