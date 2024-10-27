import React from 'react';
import { View, Text } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{transaction.name}</Text>
      <Text>Amount: ${transaction.amount}</Text>
      <Text>Date: {transaction.date}</Text>
      <Text>Description: Detailed information about the transaction...</Text>
    </View>
  );
};

export default TransactionDetail;