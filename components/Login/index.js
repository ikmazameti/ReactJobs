import React from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";

//components
import styles from "./styles";


const Login = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../assets/favicon.png")} />
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
    </View>
  );
};

export default Login;
