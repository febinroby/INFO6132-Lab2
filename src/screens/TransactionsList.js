import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TransactionsContext } from '../context/TransactionsContext';

const TransactionsList = () => {
  const navigation = useNavigation();
  const { transactions } = useContext(TransactionsContext);

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}>
          <View style={{ padding: 15 }}>
            <Text>{item.name}</Text>
            <Text>Amount: ${item.amount}</Text>
            <Text>Date: {item.date}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default TransactionsList;