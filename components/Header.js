import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ text }) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flex: 0.5,
    backgroundColor: 'antiquewhite',
    padding: 8,
  },
  headerText: {
    backgroundColor: 'lightblue',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'darkslategray',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 8,
    marginTop: 8,
  },
});

export default Header;
