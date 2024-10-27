import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from '../screens/TransactionsList';
import TransactionDetail from '../screens/TransactionDetail';

const Stack = createStackNavigator();

const TransactionsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Transactions List" component={TransactionsList} />
    <Stack.Screen name="Transaction Detail" component={TransactionDetail} />
  </Stack.Navigator>
);

export default TransactionsStack;