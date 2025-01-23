import React from "react";
import "./../styles/Operations.css"; // Assurez-vous que le fichier CSS existe

const Operations = ({ operations }) => {
  return (
    <div className="operations-container">
      {operations.map((operation, index) => (
        <div className="operation-card" key={index}>
          <h3>{operation.libelle}</h3>
          <p>Amount: ${operation.amount}</p>
          <p>Date: {operation.date}</p>
          <p>Category: {operation.category.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Operations;
