import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { OPEN_WEATHER_API_KEY } from "@env";

// import components
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import CityInput from "./CityInput";

const CurrentWeatherScreen = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Tampere");

  const cityHandler = (city) => {
    setCity(city);
  };

  const fetchWeatherData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
    );
    const data = await response.json();
    setWeatherData({
      city: data.name,
      temperature: data.main.temp,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
    });
  };

  return (
    <View style={styles.container}>
      <Header cityName={weatherData.city} />
      <WeatherInfo
        temperature={weatherData.temperature}
        wind={weatherData.windSpeed}
        description={weatherData.description}
      />
      <CityInput handleCityChange={cityHandler} />
      <Button
        style={styles.button}
        title="Get Weather"
        onPress={() => fetchWeatherData()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "antiquewhite",
    padding: 8,
  },
  button: {
    flex: 1,
    backgroundColor: "lightblue",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default CurrentWeatherScreen;
