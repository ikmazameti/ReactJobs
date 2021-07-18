import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";

//components
import Login from "./components/Login";
import ProfileScreen from "./components/Profile/index";

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
