import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

import {useQuery} from '@tanstack/react-query';
import {fetchDoctorById} from '../../api/doctors';
import DoctorCard from '../../components/DoctorList/DoctorCard';

const DoctorDetails = ({route}) => {
  const {doctorId} = route?.params;
  const {data} = useQuery({
    queryKey: ['doctor', doctorId],
    queryFn: () => fetchDoctorById(doctorId),
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <DoctorCard
          {...data}
          style={styles.cardStyle}
          imageStyle={styles.imageStyle}
          displayAll
        />
      </View>
    </ScrollView>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  cardStyle: {
    width: '100%',
  },
  imageStyle: {
    height: 340,
  },
});
