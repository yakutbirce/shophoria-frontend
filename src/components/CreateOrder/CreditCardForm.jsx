import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import { toast } from "react-toastify";

const CreditCardForm = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [is3DSecure, setIs3DSecure] = useState(false);
  const [savedCards, setSavedCards] = useState([]);

  // Kayıtlı kartları çek
  const fetchSavedCards = async () => {
    try {
      const res = await axiosInstance.get("/user/card");
      setSavedCards(res.data);
    } catch (err) {
      toast.error("Kartlar yüklenemedi");
    }
  };

  useEffect(() => {
    fetchSavedCards();
  }, []);

  //  Yeni kart ekleme
  const onSubmit = async (data) => {
    try {
      const payload = {
        card_no: data.card_no,
        expire_month: parseInt(data.expire_month),
        expire_year: parseInt(data.expire_year),
        name_on_card: data.name_on_card,
        is_secure: is3DSecure,
      };

      await axiosInstance.post("/user/card", payload);
      toast.success("Kart başarıyla kaydedildi!");
      reset();
      fetchSavedCards(); 
      if (onSuccess) onSuccess();
    } catch (err) {
      toast.error(err.response?.data?.message || "Kart eklenemedi, lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Kayıtlı kartlar listesi */}
      {savedCards.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-700">Kayıtlı Kartlar</h3>
          <ul className="space-y-2">
            {savedCards.map((card) => (
              <li
                key={card.id}
                className="border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{card.name_on_card}</p>
                  <p className="text-sm text-slate-600">
                    **** **** **** {card.card_no.slice(-4)} — {String(card.expire_month).padStart(2, "0")}/{card.expire_year}
                  </p>
                </div>
                {card.is_secure && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                    3D Secure
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Yeni kart ekleme formu */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Kart Numarası</label>
          <input
            {...register("card_no", { required: "Kart numarası zorunludur" })}
            className="w-full border px-3 py-2 rounded"
            placeholder="1234 5678 9012 3456"
          />
          {errors.card_no && <p className="text-red-500 text-sm">{errors.card_no.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Kart Üzerindeki İsim</label>
          <input
            {...register("name_on_card", { required: "İsim zorunludur" })}
            className="w-full border px-3 py-2 rounded"
            placeholder="Ali Baş"
          />
          {errors.name_on_card && (
            <p className="text-red-500 text-sm">{errors.name_on_card.message}</p>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label>Ay</label>
            <select {...register("expire_month")} className="w-full border px-2 py-2 rounded">
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {String(i + 1).padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label>Yıl</label>
            <select {...register("expire_year")} className="w-full border px-2 py-2 rounded">
              {Array.from({ length: 10 }, (_, i) => {
                const year = new Date().getFullYear() + i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="secure"
            checked={is3DSecure}
            onChange={() => setIs3DSecure((prev) => !prev)}
          />
          <label htmlFor="secure" className="text-sm">
            3D Secure ile ödemek istiyorum
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Kartı Kaydet
        </button>
      </form>
    </div>
  );
};

export default CreditCardForm;
