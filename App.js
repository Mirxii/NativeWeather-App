import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CurrentWeatherScreen from './components/CurrentWeatherScreen';
import WeatherForecastScreen from './components/WeatherForecastScreen';
import SettingsScreen from './components/SettingsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Current" component={CurrentWeatherScreen} />
        <Tab.Screen name="Forecast" component={WeatherForecastScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
