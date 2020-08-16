import React from "react";
import "./Wallets.css";

export default function OneWallet(wallet) {
  return (
    <div className="item">
      <div className="prop-1">
        <h5>{wallet.type}</h5>
      </div>
      <div className="prop-4">
        <h5>{wallet.currency}</h5>
      </div>
      <div className="prop-3">
        <h5>${wallet.balance}</h5>
      </div>
      <div className="prop-2">
        <h5>{wallet.created}</h5>
      </div>
    </div>
  );
}
