import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/LoginScreen';
/* import MainScreen from '../components/MainScreen';
import SalesScreen from '../components/SalesScreen';
import TotalPaymentScreen from '../components/TotalPaymentScreen';
import CategoryProductScreen from '../components/CategoryProductScreen';
import SettingsScreen from '../components/SettingsScreen';
import ReportScreen from '../components/ReportScreen'; */

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* 
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Sales" component={SalesScreen} />
        <Stack.Screen name="TotalPayment" component={TotalPaymentScreen} />
        <Stack.Screen name="CategoryProduct" component={CategoryProductScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Report" component={ReportScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
