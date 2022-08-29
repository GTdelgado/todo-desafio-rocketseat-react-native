import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    top: -35,
    marginLeft: 25,
    marginRight: 25,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#262626",
    color: "#808080",
  },
  button: {
    height: 60,
    backgroundColor: "#1E6F9F",
    borderRadius: 5,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    fontSize: 15,
    color: "#fff",
    fontWeight: 'bold'
  },
});
