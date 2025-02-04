import React from "react";

interface Bill {
  id: number;
  name: string;
  amount: number;
}



const BillCard: React.FC<Bill> = ( { id, name, amount } :Bill ) => {
  return (
    <div className="p-4 border rounded shadow-md max-w-sm">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p>ID: {id}</p>
      <p>Amount: {amount}</p>
    </div>
  );
};

export default BillCard;
