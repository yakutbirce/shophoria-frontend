import React, { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import { toast } from "react-toastify";
import UpdateCardForm from "./UpdateCardForm";
import { Trash2 } from "lucide-react";

const SavedCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCards = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/user/card");
      setCards(response.data);
    } catch (err) {
      toast.error("Kartlar yüklenemedi.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/user/card/${id}`);
      toast.success("Kart silindi.");
      fetchCards();
    } catch (err) {
      toast.error("Kart silinemedi.");
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold text-slate-800 mb-6">Kayıtlı Kartlar</h3>

      {loading ? (
        <p>Kartlar yükleniyor...</p>
      ) : cards.length === 0 ? (
        <p className="text-slate-600 text-sm">Kayıtlı kart bulunamadı.</p>
      ) : (
        cards.map((card) => (
          <div key={card.id} className="border rounded p-4 mb-6 bg-white shadow-sm relative">
            <button
              onClick={() => handleDelete(card.id)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700"
              title="Kartı Sil"
            >
              <Trash2 className="w-5 h-5" />
            </button>

            <p className="text-sm mb-2 text-slate-700">
              <strong>Kart No:</strong> {card.card_no}
            </p>
            <p className="text-sm mb-2 text-slate-700">
              <strong>İsim:</strong> {card.name_on_card}
            </p>
            <p className="text-sm mb-4 text-slate-700">
              <strong>Son Kullanma:</strong> {card.expire_month}/{card.expire_year}
            </p>

            <UpdateCardForm card={card} onSuccess={fetchCards} />
          </div>
        ))
      )}
    </div>
  );
};

export default SavedCards;
