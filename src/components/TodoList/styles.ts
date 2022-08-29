import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1A1A1A',
    padding: 0,
  },
  created: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  completed: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  textCreated: {
    color: '#4EA8DE',
    fontSize: 18,
    fontWeight: "bold",
  },
  textCompleted: {
    color: '#8284FA',
    fontSize: 18,
    fontWeight: "bold",
  },
  counter: {
    backgroundColor: '#333333',
    width: 28,
    height: 20,
    borderRadius: 8,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: "center",
  },
  counterText: {
    fontSize: 15,
    color: "#fff",
  },
  noData: {
    marginTop: 20,
    borderTopColor: "#333333",
    borderTopWidth: 2,
    borderStyle: "solid",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  noDataText: {
    color: '#808080',
    fontSize: 16,
    fontWeight: "bold",
  },
  noDataInfo: {
    color: '#808080',
    fontSize: 16
  },
  list: {
    marginTop: 20,
  }
});