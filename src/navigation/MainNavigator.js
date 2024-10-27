import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsStack from './TransactionsStack';
import SummaryScreen from '../screens/SummaryScreen';
import NewTransactionScreen from '../screens/NewTransactionScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const MainNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if(route.name === 'Transactions') {
          iconName = 'list-outline'
        } else if(route.name === 'Add') {
          iconName = 'add-outline'
        } else if(route.name === 'Summary') {
          iconName = 'checkmark-done-outline'
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray'
    })}
  >
    <Tab.Screen name="Transactions" component={TransactionsStack} />
    <Tab.Screen name="Add" component={NewTransactionScreen} />
    <Tab.Screen name="Summary" component={SummaryScreen} />
  </Tab.Navigator>
);