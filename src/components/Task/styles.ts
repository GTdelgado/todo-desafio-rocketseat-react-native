import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    height: 70,
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1,
    borderColor: '#333333',
    borderStyle: 'solid',
  },
  notSelect: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    marginRight: 15
  },
  select: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 15,
    backgroundColor: '#5E60CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    flex: 1,
    fontSize: 16,
    lineHeight: 20
  },
  sublimedText: {
    fontWeight: '400',
    color: '#808080',
    flex: 1,
    fontSize: 14,
    textDecorationLine: "line-through",
    lineHeight: 20
  },
  image: {
    width: 25,
    height: 25,
  }
});