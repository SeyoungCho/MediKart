import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchDoctors} from '../../api/doctors';

const DoctorList = ({}) => {
  const {data, isLoading, error} = useQuery({
    queryKey: 'doctors',
    queryFn: fetchDoctors,
  });
  return (
    <View>
      <Text>DoctorList</Text>
    </View>
  );
};

export default DoctorList;

const styles = StyleSheet.create({});
