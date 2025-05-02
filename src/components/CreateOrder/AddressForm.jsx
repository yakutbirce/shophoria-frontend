import React, { useState, useEffect } from "react";

const AddressForm = ({ onSave, onCancel, initialData = null }) => {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    address: "",
    neighborhood: "",
    district: "",
    city: "",
    type: "shipping", 
  });
  

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        type: initialData.type || "shipping", 
      });
    }
    
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-md bg-slate-50">
      <h3 className="font-semibold text-slate-800 text-base">
        {initialData ? "Adresi Güncelle" : "Yeni Adres Ekle"}
      </h3>

      <div className="flex gap-6 mb-2">
  <label className="flex items-center gap-1 text-sm text-slate-700">
    <input
      type="radio"
      name="type"
      value="shipping"
      checked={formData.type === "shipping"}
      onChange={handleChange}
    />
    Teslimat Adresi
  </label>
  <label className="flex items-center gap-1 text-sm text-slate-700">
    <input
      type="radio"
      name="type"
      value="receipt"
      checked={formData.type === "receipt"}
      onChange={handleChange}
    />
    Fatura Adresi
  </label>
</div>


      <div className="grid grid-cols-2 gap-4">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Adres Başlığı (Ev / Ofis)" className="input" />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" className="input" />
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Ad" className="input" />
        <input name="surname" value={formData.surname} onChange={handleChange} placeholder="Soyad" className="input" />
        <input name="neighborhood" value={formData.neighborhood} onChange={handleChange} placeholder="Mahalle" className="input" />
        <input name="district" value={formData.district} onChange={handleChange} placeholder="İlçe" className="input" />
        <input name="city" value={formData.city} onChange={handleChange} placeholder="İl" className="input" />
      </div>

      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Açık Adres"
        className="w-full px-3 py-2 border rounded-md"
        rows={3}
      />

      <div className="flex justify-end gap-4">
        <button type="button" onClick={onCancel} className="text-slate-500 hover:underline text-sm">
          İptal
        </button>
        <button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          Kaydet
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
