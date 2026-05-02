import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

// "npm install" para instalar a nome_modules