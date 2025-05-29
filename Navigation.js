import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './src/screens/Onboarding/Onboarding';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import OtpVerification from './src/screens/OtpVerification/OtpVerification';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboarding">
        <Stack.Screen
          name="onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="otpVerify" component={OtpVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
