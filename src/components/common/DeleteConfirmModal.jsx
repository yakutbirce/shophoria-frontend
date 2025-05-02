import React from "react";
import { Trash2 } from "lucide-react";

const DeleteConfirmModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <Trash2 className="mx-auto text-red-500 w-10 h-10 mb-4" />
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Adresi Sil</h2>
        <p className="text-sm text-slate-600 mb-6">
          Bu adresi silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm rounded-md border border-slate-300 hover:bg-slate-100"
          >
            Vazgeç
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded-md bg-red-500 hover:bg-red-600 text-white"
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
