import React from "react";
import "./Transactions.css";

export default function OneTransaction(transaction, usuarioConectado) {
  return (
    <div className="container">
      <div className="props">
        <div className="">
          <h4>Número Transacción</h4>
          <h5>{transaction.transactionNumber}</h5>
        </div>
        <div className="">
          <h4>Fecha Transacción</h4>
          <h5>{transaction.createdAt}</h5>
        </div>
        <div className="">
          <h4>Valor</h4>
          <h5>{transaction.value}</h5>
        </div>
        <div className="">
          <h4>Estado</h4>
          <h5>{transaction.state}</h5>
        </div>
        <div className="">
          <h4>Tipo Transacción</h4>
          <h5>{transaction.transactions_type}</h5>
        </div>
      </div>
    </div>
  );
}
