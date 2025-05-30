/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import DoctorList from '../../components/DoctorList/DoctorList';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <Categories />
      <SectionHeader
        title="Top Doctors"
        onPress={() => navigate('doctorList')}
      />
      <DoctorList horizontal />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
