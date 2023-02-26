import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

import Header from './Header';

const SettingsScreen = ({ isMetric, setIsMetric }) => {
  const toggleUnitSystem = () => {
    setIsMetric((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Header text="Settings" />
      <View style={styles.row}>
        <Text style={styles.text}>Imperial</Text>
        <Switch onValueChange={toggleUnitSystem} value={isMetric} />
        <Text style={styles.text}>Metric</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Units used currently:</Text>
        <Text style={styles.text}>{isMetric ? 'C & m/s' : 'F & mph'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    padding: 8,
  },
  text: {
    fontSize: 25,
    color: 'darkslategray',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default SettingsScreen;
