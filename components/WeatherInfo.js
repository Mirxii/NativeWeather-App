import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// import icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WeatherInfo = ({ temperature, wind, description }) => {
  [icon, setIcon] = useState('weather-sunny');

  const getIcon = () => {
    switch (description) {
      case 'Clear':
        setIcon('weather-sunny');
        break;
      case 'Clouds':
        setIcon('weather-cloudy');
        break;
      case 'Rain':
        setIcon('weather-pouring');
        break;
      case 'Drizzle':
        setIcon('weather-rainy');
        break;
      case 'Thunderstorm':
        setIcon('weather-lightning');
        break;
      case 'Snow':
        setIcon('weather-snowy');
        break;
      case 'Mist':
        setIcon('weather-fog');
        break;
      default:
        setIcon('weather-sunny');
    }
  };

  useEffect(() => {
    getIcon();
  }, [description]);

  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <MaterialCommunityIcons name={icon} size={100} color="darkslategray" />
        <Text style={styles.text}>{description}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>Temperature</Text>
          <Text style={styles.text}>{temperature}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>Wind</Text>
          <Text style={styles.text}>{wind}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
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
  title: {
    fontSize: 25,
    color: 'darkslategray',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 8,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});

export default WeatherInfo;
