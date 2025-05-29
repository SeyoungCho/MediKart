import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Button from '../Button/Button';
import {useNavigation} from '@react-navigation/native';

const SearchBar = ({onChange}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </Button>
      <TextInput
        style={styles.textInput}
        placeholder="Search Doctor..."
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChange}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    margin: 10,
    height: 48,
    width: '95%',
  },
  backButton: {
    paddingHorizontal: 10,
  },
  textInput: {
    width: '85%',
  },
});
