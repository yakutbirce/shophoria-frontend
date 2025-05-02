import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../../services/axiosInstance";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import DeleteConfirmModal from "../common/DeleteConfirmModal";


const AddressStep = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const userInfo = useSelector((state) => state.user.userInfo);

  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState(null);

  useEffect(() => {
    if (!token || !userInfo) {
      history.push("/login");
    } else {
      fetchAddresses();
    }
  }, [token, userInfo, history]);

  const fetchAddresses = async () => {
    try {
      const response = await axiosInstance.get("/user/address");
      console.log("Backend'den gelen adresler:", response.data);
      setAddresses(response.data);
    } catch (error) {
      console.error("Adresler alınamadı:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (address) => {
    setSelectedAddressId(address.id);
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setShowForm(true);
  };

  const handleDeleteClick = (address) => {
    setAddressToDelete(address);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axiosInstance.delete(`/user/address/${addressToDelete.id}`);
      setAddresses((prev) =>
        prev.filter((a) => a.id !== addressToDelete.id)
      );
      setShowDeleteModal(false);
      setAddressToDelete(null);
    } catch (error) {
      console.error("Adres silinemedi:", error.response?.data || error.message);
      alert("Adres silinirken bir hata oluştu.");
    }
  };

  const handleSave = async (formData) => {
    try {
      if (editingAddress && editingAddress.id) {
       
        await axiosInstance.put("/user/address", {
          ...formData,
          id: editingAddress.id,
        });
      } else {
       
        await axiosInstance.post("/user/address", formData);
      }
  
      setShowForm(false);
      setEditingAddress(null);
      fetchAddresses(); 
    } catch (error) {
      console.error("Adres kaydedilemedi:", error.response?.data || error.message);
      alert("Adres kaydedilirken bir hata oluştu.");
    }
  };
  
  
  
  

  const handleCancel = () => {
    setShowForm(false);
    setEditingAddress(null);
  };

  return (
    <div className="space-y-6">
      {/* Yeni Adres Ekle Butonu */}
      <div className="flex justify-end">
        {!showForm && (
          <button
            onClick={() => {
              setEditingAddress(null);
              setShowForm(true);
            }}
            className="px-4 py-2 text-sm rounded-md border border-sky-600 text-sky-600 hover:bg-sky-50 font-medium"
          >
            + Yeni Adres Ekle
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <AddressForm
          initialData={editingAddress}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      {/* Adres Listesi */}
      {loading ? (
        <p className="text-slate-500">Adresler yükleniyor...</p>
      ) : addresses.length === 0 ? (
        <p className="text-slate-500">
          Kayıtlı adres bulunamadı. Yeni bir adres ekleyebilirsiniz.
        </p>
      ) : (
        <div className="grid gap-4">
          {addresses.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              selected={address.id === selectedAddressId}
              onSelect={handleSelect}
              onEdit={handleEdit}
              onDelete={() => handleDeleteClick(address)}
            />
          ))}
        </div>
      )}

      {/* Silme Modalı */}
      {showDeleteModal && (
        <DeleteConfirmModal
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default AddressStep;
