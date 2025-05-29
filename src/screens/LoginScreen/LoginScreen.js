/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useCallback, useState} from 'react';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const {navigate} = useNavigation();

  const onPressLogin = useCallback(() => {
    if (mobileNumber.length === 10) {
      navigate('otpVerify', {mobileNumber});
    }
  }, [mobileNumber, navigate]);

  return (
    <View style={{flex: 1, backgroundColor: '#0B3DA9'}}>
      <View
        style={{
          flex: 0.6,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Image
          source={require('../../assets/img/facility.png')}
          style={{width: '100%', resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          flex: 0.45,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', paddingVertical: 10}}>
            Log in or sign up
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            borderColor: 'gray',
            borderWidth: 2,
            alignItems: 'center',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 18, paddingHorizontal: 10}}>+91</Text>
          <TextInput
            style={{padding: 10, fontSize: 18}}
            keyboardType="numeric"
            placeholder="Phone Number"
            maxLength={10}
            onChangeText={setMobileNumber}
          />
        </View>
        <View
          style={{width: '100%', paddingVertical: 15, paddingHorizontal: 10}}>
          <Button
            label="Log In with mobile"
            onPress={onPressLogin}
            style={{
              backgroundColor: '#0B3DA9',
            }}
          />
        </View>
      </View>
      <View
        style={{bottom: 0, position: 'absolute', width: '100%', padding: 10}}>
        <Button
          onPress={() => {}}
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            borderColor: '#939393',
            borderWidth: 2,
          }}>
          <Image source={require('../../assets/img/google_icon.png')} />
          <Text style={{fontSize: 18, color: 'black'}}>
            Continue with Google
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
