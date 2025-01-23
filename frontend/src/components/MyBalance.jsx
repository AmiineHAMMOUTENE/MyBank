import React from "react";
import "./../styles/MyBalance.css"; // Assurez-vous d'importer le bon fichier CSS

const MyBalance = ({ balance }) => {
  return (
    <div className="balance-card">
      <h3>Current Balance</h3>
      <p>${balance}</p>
    </div>
  );
};

export default MyBalance;
