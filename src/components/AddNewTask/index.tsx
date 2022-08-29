import { TextInput, View, TouchableOpacity, Text} from "react-native";
import { styles } from "./styles";

type addNewTaskBarProps = {
  value: string,
  setTaskBarText: (value: string) => void,
  handleAddButtonClick: () => void,
}

export function AddNewTaskBar({setTaskBarText, value, handleAddButtonClick}:addNewTaskBarProps){
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={setTaskBarText}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.button} onPress={() => {handleAddButtonClick()}}>
        <View style={styles.circle}>
          <Text style={styles.plus}>+</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  )
}