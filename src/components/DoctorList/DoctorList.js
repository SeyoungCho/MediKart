/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchDoctors} from '../../api/doctors';
import DoctorCard from './DoctorCard';

const DoctorList = ({horizontal = false}) => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['doctors'],
    queryFn: fetchDoctors,
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <DoctorCard key={item.id} {...item} horizontal={horizontal} />;
        }}
        style={styles.container}
        contentContainerStyle={{gap: 16}}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal={horizontal}
        numColumns={!horizontal && 2}
        columnWrapperStyle={
          !horizontal && {justifyContent: 'space-between', gap: 16}
        }
      />
    </View>
  );
};

export default DoctorList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
