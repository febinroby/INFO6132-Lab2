import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { TransactionsContext } from '../context/TransactionsContext';

const NewTransactionScreen = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(TransactionsContext);

  const handleAddTransaction = () => {
    if (!name.trim() || !amount.trim()) {
      Alert.alert('Error', 'Please fill in both the transaction name and amount.');
      return;
    }

    const newTransaction = {
      id: Date.now().toString(),
      name,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0],
    };

    addTransaction(newTransaction);

    Alert.alert('Success', 'Transaction added successfully.');

    setName('');
    setAmount('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Transaction Name</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderWidth: 1, marginVertical: 10 }} />
      <Text>Amount</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 10 }}
      />
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </View>
  );
};

export default NewTransactionScreen;