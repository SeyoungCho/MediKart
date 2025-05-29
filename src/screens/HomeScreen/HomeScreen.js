/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <Categories />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
