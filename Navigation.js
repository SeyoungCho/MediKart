import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './src/screens/Onboarding/Onboarding';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import OtpVerification from './src/screens/OtpVerification/OtpVerification';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import DoctorList from './src/components/DoctorList/DoctorList';
import DoctorDetails from './src/screens/DoctorDetails/DoctorDetails';

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
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="searchScreen"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="doctorList"
          component={DoctorList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="doctorDetails"
          component={DoctorDetails}
          options={{headerTitle: 'Doctor Details', headerBackTitle: 'Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
