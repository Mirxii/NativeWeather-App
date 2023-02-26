import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { OPEN_WEATHER_API_KEY } from '@env';
import { useNetInfo } from '@react-native-community/netinfo';

// import components
import Header from './Header';
import WeatherInfo from './WeatherInfo';
import CityInput from './CityInput';

const CurrentWeatherScreen = ({ isMetric }) => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(null);
  const [location, setLocation] = useState(null);
  const [method, setMethod] = useState(null);
  const netInfo = useNetInfo();

  const cityHandler = (city) => {
    if (city) {
      setCity(city);
      setMethod('city');
    }
  };

  const locationHandler = (location) => {
    if (location) {
      setLocation(location);
      setMethod('coords');
    }
  };

  const fetchWeather = async () => {
    if (!netInfo.isConnected) {
      console.log('No internet connection');
      return;
    }
    if (method === 'city') {
      fetchWeatherDataByCity();
    } else if (method === 'coords') {
      fetchWeatherDataByCoords();
    }
  };

  const fetchWeatherDataByCity = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${
          isMetric === true ? 'metric' : 'imperial'
        }&appid=${OPEN_WEATHER_API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData({
          city: data.name,
          temperature: data.main.temp,
          windSpeed: data.wind.speed,
          description: data.weather[0].main,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeatherDataByCoords = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          location.coords.latitude
        }&lon=${location.coords.longitude}&units=${
          isMetric === true ? 'metric' : 'imperial'
        }&appid=${OPEN_WEATHER_API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData({
          city: data.name,
          temperature: data.main.temp,
          windSpeed: data.wind.speed,
          description: data.weather[0].main,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  let cityTitle = weatherData.city ? weatherData.city : 'Lookup a city';

  return (
    <View style={styles.container}>
      <Header text={cityTitle} />
      <WeatherInfo
        temperature={weatherData.temperature}
        wind={weatherData.windSpeed}
        description={weatherData.description}
      />
      <CityInput
        handleLocationChange={locationHandler}
        handleCityChange={cityHandler}
      />
      <Button title="Get Weather" onPress={() => fetchWeather()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'antiquewhite',
    padding: 8,
  },
});

export default CurrentWeatherScreen;
