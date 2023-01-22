import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const WeatherListItem = ({ time, description, temperature, wind }) => {
  [icon, setIcon] = useState("");
  [hours, setHours] = useState("");

  const getIcon = () => {
    switch (description) {
      case "Clear":
        setIcon("weather-sunny");
        break;
      case "Clouds":
        setIcon("weather-cloudy");
        break;
      case "Rain":
        setIcon("weather-pouring");
        break;
      case "Drizzle":
        setIcon("weather-rainy");
        break;
      case "Thunderstorm":
        setIcon("weather-lightning");
        break;
      case "Snow":
        setIcon("weather-snowy");
        break;
      case "Mist":
        setIcon("weather-fog");
        break;
      default:
        setIcon("weather-fog");
    }
  };

  const getHours = () => {
    let parsedHours = `${time.split(" ")[1].split(":")[0]}`;
    setHours(parsedHours);
  };

  useMemo(() => {
    getIcon();
  }, [description]);

  useMemo(() => {
    getHours();
  }, [time]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{hours}</Text>
      <MaterialCommunityIcons name={icon} size={22} color="darkslategray" />
      <Text style={styles.text}>{temperature}</Text>
      <Text style={styles.text}>{wind}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "antiquewhite",
    padding: 8,
    borderBottomColor: "darkslategray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 22,
    color: "darkslategray",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});

export default WeatherListItem;
