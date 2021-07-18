import React from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import Transaction from "../Transaction";

//components
import styles from "./styles";

const ProfileScreen = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}></View>
      <View style={styles.header}>
        <Text>Overview</Text>
        <Text>Sept 13,2020</Text>
      </View>
      <Transaction />
      <Transaction />
      <Transaction />
    </View>
  );
};

export default ProfileScreen;
