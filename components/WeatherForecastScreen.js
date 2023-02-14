import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { OPEN_WEATHER_API_KEY } from '@env';
import { FlatList } from 'react-native';

import CityInput from './CityInput';
import WeatherListItem from './WeatherListItem';

const WeatherForecastScreen = () => {
  const [forecastData, setForecastData] = useState({});
  const [city, setCity] = useState(null);
  const [location, setLocation] = useState(null);
  const [method, setMethod] = useState(null);

  const cityHandler = (city) => {
    setCity(city);
    setMethod('city');
  };

  const locationHandler = (location) => {
    setLocation(location);
    setMethod('coords');
  };

  const fetchForecast = async () => {
    if (method === 'city') {
      fetchForecastDataByCity();
    } else if (method === 'coords') {
      fetchForecastDataByCoords();
    }
  };

  const fetchForecastDataByCity = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
      );
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchForecastDataByCoords = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
      );
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.log(error);
    }
  };

  let cityTitle = forecastData.city ? forecastData.city.name : 'Lookup a city';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{cityTitle}</Text>
      <FlatList
        style={styles.list}
        data={forecastData.list}
        renderItem={({ item }) => (
          <WeatherListItem
            time={item.dt_txt}
            description={item.weather[0].main}
            temperature={item.main.temp}
            wind={item.wind.speed}
          />
        )}
        keyExtractor={(item) => item.dt_txt}
      />
      <CityInput
        handleLocationChange={locationHandler}
        handleCityChange={cityHandler}
      />
      <Button title="Get Forecast" onPress={() => fetchForecast()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    padding: 8,
  },
  list: {
    flex: 1,
    padding: 8,
  },
  text: {
    fontSize: 25,
    color: 'darkslategray',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
});

export default WeatherForecastScreen;
