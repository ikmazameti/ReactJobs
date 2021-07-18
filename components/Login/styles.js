import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
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

export default Styles;
