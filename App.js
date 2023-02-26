import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CurrentWeatherScreen from './components/CurrentWeatherScreen';
import WeatherForecastScreen from './components/WeatherForecastScreen';
import SettingsScreen from './components/SettingsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isMetric, setIsMetric] = useState(true);

  let units = isMetric ? 'metric' : 'imperial';

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={`Current - ${units}`}
          children={() => <CurrentWeatherScreen isMetric={isMetric} />}
        />
        <Tab.Screen
          name={`Forecast - ${units}`}
          children={() => <WeatherForecastScreen isMetric={isMetric} />}
        />
        <Tab.Screen
          name="Settings"
          children={() => (
            <SettingsScreen isMetric={isMetric} setIsMetric={setIsMetric} />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
