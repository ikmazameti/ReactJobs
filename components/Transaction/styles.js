import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#045",
  },
  header: {
    flexDirection: "row",
    alignContent: "center",
  },
  upIcon: {
    backgroundColor: "#C8C8C8",
    borderRadius: 20,
    padding: 16,
    width: 60,
    alignSelf: "flex-start",
  },
  textAmount: {
    alignSelf: "flex-end",
  },
});

export default Styles;
