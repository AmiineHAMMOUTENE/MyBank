import React from "react";
import MainLayout from "./layouts/MainLayout.jsx"; // Import du MainLayout
import OperationsPage from "./pages/OperationsPage.jsx"; // Import du composant OperationsPage

const App = () => {
  return (
    <MainLayout>
      <OperationsPage /> {/* Utilisation du composant OperationsPage */}
    </MainLayout>
  );
};

export default App;
