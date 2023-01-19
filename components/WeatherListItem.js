const WeatherListItem = ({weatherData}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{weatherData.city}</Text>
      <Text style={styles.text}>{weatherData.temperature}</Text>
      <Text style={styles.text}>{weatherData.windSpeed}</Text>
      <Text style={styles.text}>{weatherData.description}</Text>
    </View>
  );
};
