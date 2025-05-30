/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchDoctors} from '../../api/doctors';
import DoctorCard from './DoctorCard';
import Button from '../Button/Button';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

const DoctorList = ({horizontal = false}) => {
  const {data} = useQuery({
    queryKey: ['doctors'],
    queryFn: fetchDoctors,
  });
  const navigation = useNavigation();
  const CustomView =
    Platform.OS === 'ios' ? View : horizontal ? View : SafeAreaView;
  return (
    <CustomView style={styles.container}>
      {!horizontal && (
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 40,
          }}>
          <Button onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/img/back.png')} />
          </Button>
        </View>
      )}
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
          !horizontal && {justifyContent: 'space-between', flex: 1, gap: 12}
        }
      />
    </CustomView>
  );
};

export default DoctorList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});
