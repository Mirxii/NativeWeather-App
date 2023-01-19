import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CurrentWeatherScreen from "./components/CurrentWeatherScreen";
import WeatherForecastScreen from "./components/WeatherForecastScreen";
import SettingsScreen from "./components/SettingsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Current" component={CurrentWeatherScreen} />
        <Stack.Screen name="Forecast" component={WeatherForecastScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
