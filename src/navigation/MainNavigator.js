import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsStack from './TransactionsStack';
import SummaryScreen from '../screens/SummaryScreen';
import NewTransactionScreen from '../screens/NewTransactionScreen';

const Tab = createBottomTabNavigator();

export const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Transactions" component={TransactionsStack} />
    <Tab.Screen name="Add" component={NewTransactionScreen} />
    <Tab.Screen name="Summary" component={SummaryScreen} />
  </Tab.Navigator>
);