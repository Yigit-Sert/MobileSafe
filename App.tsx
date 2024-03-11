import React from 'react';
import AppNavigator from './navigation/AppNavigatior';
import { NativeBaseProvider } from "native-base";


const App = () => {
  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  );
};

export default App;
