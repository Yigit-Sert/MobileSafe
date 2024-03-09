import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Authentication/LoginScreen';
import MainScreen from '../screens/Main/MainScreen';
import SalesScreen from '../screens/Sales/SalesScreen';
import PaymentScreen from '../screens/Payment/PaymentScreen';
import ProductsScreen from '../screens/Products/ProductsScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import ReportScreen from '../screens/Reports/ReportScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Sales" component={SalesScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Product" component={ProductsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
