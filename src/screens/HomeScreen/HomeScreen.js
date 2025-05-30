/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <Categories />
      <SectionHeader title="Top Doctors" onPress={() => {}} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
