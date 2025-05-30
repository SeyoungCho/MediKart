/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {symptomList} from './constants';
import {COLORS} from '../../styles/color';

const Categories = ({onChangeCategory}) => {
  const [selected, setSelected] = useState(0);

  const onPress = useCallback(
    index => {
      setSelected(index);
      onChangeCategory?.(selected);
    },
    [onChangeCategory, selected],
  );

  const RenderItem = ({name, description, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(index)}
        style={[
          styles.categoryItem,
          selected === index && {backgroundColor: COLORS.PRIMARY},
          index === symptomList.length - 1 && {marginRight: 20},
        ]}>
        <Text
          style={{
            color: index === selected && COLORS.SECONDARY,
          }}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={symptomList}
        horizontal={true}
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 8,
        }}
        renderItem={({item, index}) => (
          <RenderItem {...item} index={index} key={index}>
            {item.name}
          </RenderItem>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  flatList: {
    padding: 10,
  },
  categoryItem: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#e9e9FE',
    alignSelf: 'center',
  },
});
