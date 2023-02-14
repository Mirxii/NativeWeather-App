import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import GeoLocation from './GeoLocation';

const CityInput = (props) => {
  const cityChangeHandler = (city) => {
    props.handleCityChange(city);
  };

  const locationChangeHandler = (location) => {
    props.handleLocationChange(location);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lookup weather in:</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} onChangeText={cityChangeHandler} />
        <GeoLocation locationChangeHandler={locationChangeHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 8,
  },
  header: {
    backgroundColor: 'antiquewhite',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'darkslategray',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  input: {
    flex: 3,
    backgroundColor: 'lightblue',
    fontSize: 22,
    color: 'darkslategray',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
  },
});

export default CityInput;
