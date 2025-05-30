/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
}) => {
  const {navigate} = useNavigation();
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
        ]}
      />

      <View style={styles.metaDataContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 2}}>
          <Image source={require('../../assets/img/star.png')} />
          <Text>{rating}</Text>
        </View>
        <View style={styles.feeContainer}>
          <Text>Fee ₹{fee}</Text>
        </View>
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
  feeContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
});
