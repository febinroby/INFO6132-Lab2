import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TransactionsContext } from '../context/TransactionsContext';

const SummaryScreen = () => {
  const { transactions } = useContext(TransactionsContext);

  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Summary</Text>
      <Text>Total Expenses: ${totalExpenses}</Text>
    </View>
  );
};

export default SummaryScreen;