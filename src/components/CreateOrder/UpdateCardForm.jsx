import { useForm } from "react-hook-form";
import axiosInstance from "../../services/axiosInstance";
import { toast } from "react-toastify";

const UpdateCardForm = ({ card, onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: card?.id,
      card_no: card?.card_no,
      expire_month: card?.expire_month,
      expire_year: card?.expire_year,
      name_on_card: card?.name_on_card,
    },
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        id: data.id,
        card_no: data.card_no,
        expire_month: parseInt(data.expire_month),
        expire_year: parseInt(data.expire_year),
        name_on_card: data.name_on_card,
      };

      await axiosInstance.put("/user/card", payload);
      toast.success("Kart başarıyla güncellendi!");
      if (onSuccess) onSuccess();
    } catch (err) {
      toast.error(err.response?.data?.message || "Kart güncellenemedi.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
      <h3 className="font-semibold text-lg text-slate-800">Kartı Güncelle</h3>

      <input type="hidden" {...register("id")} />

      <div>
        <label className="block text-sm font-medium">Kart Numarası</label>
        <input
          {...register("card_no", { required: "Kart numarası zorunlu" })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.card_no && <p className="text-red-500 text-sm">{errors.card_no.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Kart Üzerindeki İsim</label>
        <input
          {...register("name_on_card", { required: "İsim zorunlu" })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.name_on_card && <p className="text-red-500 text-sm">{errors.name_on_card.message}</p>}
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">Ay</label>
          <select {...register("expire_month")} className="w-full border px-2 py-2 rounded">
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {String(i + 1).padStart(2, "0")}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium">Yıl</label>
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

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
      >
        Kartı Güncelle
      </button>
    </form>
  );
};

export default UpdateCardForm;
