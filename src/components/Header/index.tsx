import { Image, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.iconContainer}>
      <Image source={require("../../../assets/icons/logo.png")}/>
    </View>
  );
}
