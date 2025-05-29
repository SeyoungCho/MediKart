import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {COLORS} from '../../styles/color';
import SearchBar from '../../components/SearchBar/SearchBar';

const SearchScreen = () => {
  const handleChange = useCallback(text => {
    console.log('Search: ', text);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar onChange={handleChange} />
      </View>
      <View style={styles.subContainer}>
        <Text>Recent Searches</Text>
        <TouchableOpacity>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>
      {/* Recent Searches */}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    backgroundColor: COLORS.PRIMARY,
    height: 65,
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  clearText: {
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
  },
});
