import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Platform } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'expo-checkbox';

export default Todo = ({
  nameTodo,
  todoDone,
  updateTodoDone,
  indexTodo,
  deleteTodo,
}) => {
  const titleBtn = todoDone ? "Done" : "Not Done";

  const styleBtnUpdate = todoDone
    ? [styles.updateBtn, styles.updateBtnYes]
    : [styles.updateBtn, styles.updateBtnNo];

  const containerStyles = [
    styles.todoContainer,
    Platform.OS === "android"
      ? { elevation: 10 }
      : {
          shadowColor: "rgba(0, 0, 0, 0.2)",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 6,
        },
  ];

  return (
    <View style={containerStyles}>
      <View style={styleBtnUpdate}>
      <View style={styleBtnUpdate}>
        <Checkbox
          value={todoDone}
          onValueChange={() => {
            updateTodoDone(indexTodo);
          }}
        />
</View>
      </View>
      <Text style={styles.nameTodo}>{nameTodo}</Text>
      <TouchableOpacity
        style={styles.deleteBtn}
        activeOpacity={0.7}
        onPress={() => {
          deleteTodo(indexTodo);
        }}
      >
        <Icon name="trash" size={30} color="black" /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    backgroundColor: "#FBD3FF",
    margin: 20,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 20,
    borderColor: "#aaa",
    // backgroundColor: "#eee",
  },
  nameTodo: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
  deleteBtn: {
    width: 60,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBD3FF",
    borderRadius: 8,
  },
  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  updateBtn: {
    width: 60,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textUpdateBtn: {
    color: "white",
  },
  updateBtnYes: {
    backgroundColor: "#27ae60",
  },
  updateBtnNo: {
    backgroundColor: "#e74c3c",
  },
});
