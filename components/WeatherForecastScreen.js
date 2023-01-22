import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { OPEN_WEATHER_API_KEY } from "@env";
import { FlatList } from "react-native";

import CityInput from "./CityInput";
import WeatherListItem from "./WeatherListItem";

const WeatherForecastScreen = () => {
  const [city, setCity] = useState("Tampere");
  const [forecastData, setForecastData] = useState({});

  const fetchForecastData = async () => {
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

  const cityHandler = (city) => {
    setCity(city);
  };

  let cityTitle = forecastData.city ? forecastData.city.name : "Lookup a city";

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
      <CityInput handleCityChange={cityHandler} />
      <Button title="Get Forecast" onPress={() => fetchForecastData()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "antiquewhite",
    padding: 8,
  },
  list: {
    flex: 1,
    padding: 8,
  },
  text: {
    fontSize: 25,
    color: "darkslategray",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});

export default WeatherForecastScreen;
