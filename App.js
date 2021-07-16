import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("./assets/favicon.png")} />
      </View>
      <View style={styles.emailContainer}>
        <Text>Email Address</Text>
        <TextInput />
      </View>
      <View style={styles.passwordContainer}>
        <Text>Password</Text>
        <TextInput />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <View style={styles.textBottomContainer}>
        <Text style={styles.textSignup}>Signup</Text>
        <Text style={styles.textForgot}>Forgot Password?</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#045",
    alignItems: "center",
    justifyContent: "center",
  },
  emailContainer: {
    borderRadius: 45,

    backgroundColor: "#fff",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
    paddingBottom: 30,
    paddingTop: 30,
  },
  passwordContainer: {
    backgroundColor: "#fff",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
    paddingBottom: 30,
    paddingTop: 30,
    borderRadius: 45,
  },
  buttonText: {},
  button: {
    borderRadius: 45,
    backgroundColor: "#98e",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    paddingBottom: 30,
    paddingTop: 30,
  },
  logo: {},
  textBottomContainer: {
    margin: 7,
    alignItems: "center",
    flexDirection: "row",
  },
  textSignup: {
    alignSelf: "flex-start",
  },
  textForgot: {
    alignSelf: "flex-end",
  },
});
