import CreditCardForm from "./CreditCardForm";

const PaymentStep = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow space-y-6">
      <h2 className="text-xl font-bold">Ödeme Bilgileri</h2>
      <CreditCardForm />
    </div>
  );
};

export default PaymentStep;
