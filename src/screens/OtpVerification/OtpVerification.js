/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {OtpInput} from 'react-native-otp-entry';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../styles/color';

const OtpVerification = ({route}) => {
  const {mobileNumber} = route?.params;
  const [counter, setCounter] = useState(30);
  const {navigate} = useNavigation();

  const countDown = useCallback(() => {
    if (counter > 0) {
      setCounter(prev => prev - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setInterval(countDown, 1000);
    return () => clearInterval(timer);
  }, [countDown]);

  const onChangeText = useCallback(text => {}, []);

  const onOTPFilled = useCallback(text => {
    navigate('homeScreen');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text>We've sent a verification code to</Text>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>
          +91-{mobileNumber}
        </Text>
      </View>
      <View style={{margin: 20}}>
        <OtpInput
          numberOfDigits={6}
          onChangeText={onChangeText}
          onFilled={onOTPFilled}
        />
      </View>
      {counter > 0 && (
        <Text style={{alignSelf: 'center', marginTop: 20}}>
          Resend OTP in {counter} seconds
        </Text>
      )}
      {counter === 0 && (
        <Button>
          <Text style={{fontSize: 16, color: COLORS.PRIMARY}}>Resend</Text>
        </Button>
      )}
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({});
