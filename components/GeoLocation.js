import React from 'react';
import { TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Location from 'expo-location';

const GeoLocation = (props) => {
  const fetchLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    props.locationChangeHandler(location);
  };

  return (
    <TouchableHighlight onPress={fetchLocation}>
      <MaterialCommunityIcons
        name="map-marker"
        size={50}
        color="darkslategray"
      />
    </TouchableHighlight>
  );
};

export default GeoLocation;
