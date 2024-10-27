import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigation/MainNavigator';
import { TransactionsProvider } from './src/context/TransactionsContext';

const App = () => {
  return (
    <TransactionsProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </TransactionsProvider>
  );
};

export default App;