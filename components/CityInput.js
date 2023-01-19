import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const CityInput = props => {
  const cityChangeHandler = city => {
    props.handleCityChange(city);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lookup weather in:</Text>
      <TextInput style={styles.input} onChangeText={cityChangeHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    backgroundColor: 'lightblue',
    fontSize: 22,
    color: 'darkslategray',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 16,
    marginTop: 8,
    marginBottom: 8,
  },
});

export default CityInput;
