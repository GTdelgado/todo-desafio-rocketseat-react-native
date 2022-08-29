import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type TaskProps = {
  task: string;
  isCompleted: boolean;
  onSelect: (task: string) => void;
  onRemove: (task: string) => void;
};
export function Task({ isCompleted, task, onRemove, onSelect }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelect(task)}>
        <View style={isCompleted ? styles.select : styles.notSelect}>
          {isCompleted ? (
            <Image source={require("../../../assets/icons/checked.png")} />
          ) : (
            ""
          )}
        </View>
      </TouchableOpacity>

      <Text style={isCompleted ? styles.sublimedText : styles.text}>
        {task}
      </Text>

      <TouchableOpacity onPress={() => onRemove(task)}>
        <Image
          source={require("../../../assets/icons/Lixeira.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}
