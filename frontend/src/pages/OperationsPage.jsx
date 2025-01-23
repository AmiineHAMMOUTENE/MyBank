import React from "react";
import Operations from "./../components/Operations.jsx"; // Import du composant Operations
import MyBalance from "./../components/MyBalance.jsx"; // Import du composant MyBalance

const OperationsPage = () => {
  const operations = [
    {
      libelle: "Deposit",
      amount: 500,
      date: "2025-01-20",
      category: {
        title: "Income",
      },
    },
    {
      libelle: "Withdrawal",
      amount: 100,
      date: "2025-01-21",
      category: {
        title: "Expense",
      },
    },
    {
      libelle: "Transfer",
      amount: 200,
      date: "2025-01-22",
      category: {
        title: "Transfer",
      },
    },
  ];

  // Calcul du solde actuel en fonction des opérations
  const balance = operations.reduce((total, operation) => {
    return operation.category.title === "Income"
      ? total + operation.amount
      : total - operation.amount;
  }, 0);

  return (
    <div>
      <h2>My Bank Operations</h2>

      {/* Affichage de la carte bleue avec le solde */}
      <MyBalance balance={balance} />

      {/* Liste des opérations */}
      <Operations operations={operations} />
    </div>
  );
};

export default OperationsPage;
