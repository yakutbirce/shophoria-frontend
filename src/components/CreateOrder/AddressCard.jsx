import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const AddressCard = ({ address, onSelect, onEdit, onDelete, selected }) => {
  return (
    <div
      className={`border rounded-lg p-4 text-sm space-y-2 ${
        selected ? "border-sky-600 bg-sky-50" : "border-slate-300"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold text-slate-800">{address.title}</h3>
        <button
          onClick={() => onSelect(address)}
          className={`px-3 py-1 text-xs rounded-md font-medium border ${
            selected
              ? "border-sky-600 text-sky-600"
              : "border-slate-400 text-slate-500 hover:border-sky-600 hover:text-sky-600"
          }`}
        >
          {selected ? "Seçili" : "Seç"}
        </button>
      </div>

      <div className="text-slate-700">
        <p>{address.name} {address.surname} - {address.phone}</p>
        <p>{address.address}</p>
        <p>{address.neighborhood}, {address.district}, {address.city}</p>
      </div>

      <div className="flex gap-4 mt-2">
        <button
          onClick={() => onEdit(address)}
          className="flex items-center gap-1 text-sky-600 text-xs hover:underline"
        >
          <Pencil className="w-4 h-4" />
          Düzenle
        </button>
        <button
          onClick={() => onDelete(address)}
          className="flex items-center gap-1 text-red-500 text-xs hover:underline"
        >
          <Trash2 className="w-4 h-4" />
          Sil
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
