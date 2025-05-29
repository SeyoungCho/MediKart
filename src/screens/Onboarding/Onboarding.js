/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import Button from '../../components/Button/Button';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/img/splash.png')}
        style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            flex: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 120,
          }}>
          <Image
            source={require('../../assets/img/doctor.png')}
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
            <Text
              style={{fontSize: 24, fontWeight: 'bold', paddingVertical: 10}}>
              Welcome to Medikart
            </Text>
            <Text
              style={{
                fontSize: 18,
                paddingVertical: 10,
                alignSelf: 'center',
                paddingHorizontal: 20,
                textAlign: 'center',
                color: 'gray',
              }}>
              Book appointments with your favorite doctors
            </Text>
          </View>
        </View>
        <View
          style={{bottom: 0, position: 'absolute', width: '100%', padding: 10}}>
          <Button
            label="Get Started"
            onPress={() => {
              navigation.navigate('loginScreen');
            }}
            style={{
              backgroundColor: '#0B3DA9',
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
