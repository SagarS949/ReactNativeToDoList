import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./components/Header";
import Input from "./components/Input";
import Todo from "./components/Todo";
import { FlatList } from "react-native";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    const tmpTodoList = [...todoList];
    tmpTodoList.push(newTodo);
    setTodoList(tmpTodoList);
  };

  const deleteTodo = (indexTodo) => {
    const tmpTodoList = [...todoList];
    tmpTodoList.splice(indexTodo, 1);
    setTodoList(tmpTodoList);
  };

  const getTodos = () => {
    AsyncStorage.getItem("todoList").then((jsonTodoList) => {
      const todos = JSON.parse(jsonTodoList || "[]");
      setTodoList(todos);
    });
  };

  const saveTodo = () => {
    AsyncStorage.setItem("todoList", JSON.stringify(todoList))
      .then(() => {
        console.log("Save OK !");
      })
      .catch((err) => {
        console.log("ERROR !! " + err.message);
      });
  };

  const updateTodoDone = (indexTodo) => {
    const tmpTodoList = [...todoList];
    tmpTodoList[indexTodo].done = !tmpTodoList[indexTodo].done;
    setTodoList(tmpTodoList);
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    saveTodo();
  });

  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>
      <View style={styles.inputContainer}>
        <Input addTodo={addTodo}></Input>
      </View>
      <View style={styles.todolistContainer}>
        <FlatList
          data={todoList}
          renderItem={({ item, index }) => (
            <Todo
              nameTodo={item.name}
              todoDone={item.done}
              indexTodo={index}
              deleteTodo={deleteTodo}
              updateTodoDone={updateTodoDone}
            ></Todo>
          )}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>
      </View>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48426D", //full background
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#000000",
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    // paddingHorizontal: 10,
    // paddingVertical: 5, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  todolistContainer: {
    flex: 5,
    backgroundColor: "#C4EEFF", // Change the background color of the todo list
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
  },
});
