import React, { createContext, useState } from 'react';

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: '1', name: 'Groceries', amount: 50, date: '2024-10-27' },
    { id: '2', name: 'Rent', amount: 700, date: '2024-10-27' },
    { id: '3', name: 'Utilities', amount: 30, date: '2024-10-27' },
  ]);

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};