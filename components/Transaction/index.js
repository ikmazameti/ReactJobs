import React from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

//components
import styles from "./styles";

const Transaction = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <AntDesign
          style={styles.upIcon}
          name="arrowup"
          size={24}
          color="black"
        />
        <Text>Sent</Text>
        <Text>Sending payment to clients</Text>
        <Text style={styles.textAmount} >$150</Text>
      </View>
    </View>
  );
};

export default Transaction;
