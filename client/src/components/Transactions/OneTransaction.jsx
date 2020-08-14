import React from "react";
import "./Transactions.css";

export default function OneTransaction(transaction) {
  return (
    <div className="item">
      <div className="prop-1">
        <h5>N° {transaction.transactionNumber}</h5>
      </div>
      <div className="prop-2">
        <h5>${transaction.value}</h5>
      </div>
      <div className="prop-3">
        <h5>{transaction.state}</h5>
      </div>
      <div className="prop-4">
        <h5>{transaction.transactions_type}</h5>
      </div>
    </div>
  )
}
