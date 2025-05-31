/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {fetchSpecialties} from '../../api/specialties';

const cardGap = 16;
const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

const DoctorCard = ({
  name,
  image,
  specialty,
  rating,
  fee,
  horizontal,
  id,
  style,
  imageStyle,
  displayAll,
}) => {
  const {navigate} = useNavigation();
  const {data} = useQuery({
    queryKey: ['specialties'],
    queryFn: () => fetchSpecialties(),
  });
  const specialtyObj = useMemo(() => {
    return data?.find(item => item.id === specialty);
  }, [data, specialty]);
  return (
    <TouchableOpacity
      onPress={() => navigate('doctorDetails', {doctorId: id})}
      style={[styles.container, style]}>
      <Image
        source={{uri: image}}
        style={[
          styles.image,
          !horizontal && {
            height: 220,
          },
          imageStyle,
        ]}
      />

      <View style={styles.metaDataContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 2}}>
          <Image source={require('../../assets/img/star.png')} />
          <Text>{rating}</Text>
        </View>
      </View>
      <View style={styles.subMetaDataContainer}>
        {!displayAll && <Text>Fee ₹{fee}</Text>}
        {displayAll && <Text>{specialtyObj?.title}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    width: cardWidth,
  },
  image: {
    height: '48%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '400',
    width: '50%',
  },
  metaDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 5,
  },
  subMetaDataContainer: {
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 5,
  },
});
