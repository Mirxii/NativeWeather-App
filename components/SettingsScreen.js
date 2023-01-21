import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "antiquewhite",
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

export default SettingsScreen;
