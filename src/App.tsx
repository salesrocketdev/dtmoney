import { useState } from "react";

import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header/Index";
import { Dashboard } from "./components/Dashboard/Index";

import { NewTransactionModal } from "./components/NewTransactionModal/Index";

import Modal from "react-modal";

import { TransactionsProvider } from "./contexts/TransactionsContext";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
