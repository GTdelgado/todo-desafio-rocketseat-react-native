import { useState } from "react";
import { Alert, View } from "react-native";
import { AddNewTaskBar } from "../../components/AddNewTask";
import { Header } from "../../components/Header";
import { TodoList } from "../../components/TodoList";
import { styles } from "./styles";

type TodoList = {
  task: string;
  isCompleted: boolean;
}[];

export function Home() {
  const [task, setTask] = useState("");
  const [todoTaskList, setTodoTaskList] = useState<TodoList>([]);

  function handleAddButtonClick() {
    let exists = false;
    todoTaskList.forEach((todoTask) => {
      if (todoTask.task === task) {
        exists = true;
      }
    });
    if (exists) {
      return Alert.alert(
        "Tarefa já existe",
        "Já existe uma tarefa igual definida"
      );
    }
    setTodoTaskList([...todoTaskList, { isCompleted: false, task }]);
    setTask("");
  }

  function handleRemove(task: string) {
    setTodoTaskList(todoTaskList.filter(todoTask => todoTask.task !== task))
  }

  function handleSelect(task: string) {
    setTodoTaskList(todoTaskList.map((todoTask) => {
      if(todoTask.task === task) todoTask.isCompleted = !todoTask.isCompleted
      return todoTask
    }))
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddNewTaskBar
          setTaskBarText={setTask}
          value={task}
          handleAddButtonClick={handleAddButtonClick}
        />
        <TodoList
          tasks={todoTaskList}
          onRemove={handleRemove}
          onSelect={handleSelect}
        />
      </View>
    </View>
  );
}
