import { Text, View, FlatList, Image } from "react-native";
import { Task } from "../Task";
import { styles } from "./styles";

type TodoListProps = {
  tasks: {
    task: string;
    isCompleted: boolean;
  }[];
  onRemove: (task: string) => void;
  onSelect: (task: string) => void;
};

export function TodoList({ tasks, onSelect, onRemove }: TodoListProps) {
  const count = tasks.reduce(
    (prev, curr) => {
      let actual = prev;
      curr.isCompleted ? actual[0]++ : actual[1]++;
      return actual;
    },
    [0, 0]
  );
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.created}>
          <Text style={styles.textCreated}>Criadas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{count[0]}</Text>
          </View>
        </View>
        <View style={styles.completed}>
          <Text style={styles.textCompleted}>Concluidas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{count[1]}</Text>
          </View>
        </View>
      </View>
      <View style={styles.list}>
        {!tasks.length ? (
          <View style={styles.noData}>
            <Image
              source={require("../../../assets/icons/clipboard.png")}
              style={{ marginBottom: 20 }}
            />
            <Text style={styles.noDataText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.noDataText}>
              Crie tarefas e organize seus itens a fazer{" "}
            </Text>
          </View>
        ) : (
          <></>
        )}
        <FlatList
          keyExtractor={(task) => task.task}
          data={tasks}
          renderItem={({ item }) => {
            return (
              <Task
                task={item.task}
                isCompleted={item.isCompleted}
                onRemove={onRemove}
                onSelect={onSelect}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
